from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict
from playwright.sync_api import sync_playwright
import os
import json
from datetime import datetime
from jinja2 import Template
import tempfile
import shutil

app = FastAPI(title="Travel Quotation PDF Generator API")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data Models
class Salesperson(BaseModel):
    name: str
    phone: str
    email: str
    photo: str

class Summary(BaseModel):
    duration: str
    travelers: int
    rating: float
    highlights: List[str]

class Pricing(BaseModel):
    subtotal: float
    taxes: float
    discount: float
    total: float
    perPerson: float
    depositDue: float
    currency: str

class Meals(BaseModel):
    breakfast: str
    lunch: str
    dinner: str

class Hotel(BaseModel):
    name: str
    stars: int
    image: str
    address: str
    amenities: Optional[List[str]] = None

class Activity(BaseModel):
    time: str
    title: str
    description: str
    images: Optional[List[str]] = None
    meetingPoint: str
    type: str

class Day(BaseModel):
    dayNumber: int
    date: str
    location: str
    meals: Optional[Meals] = None
    hotel: Optional[Hotel] = None
    activities: List[Activity]

class GalleryItem(BaseModel):
    url: str
    caption: str

class CostBreakdownItem(BaseModel):
    item: str
    qty: int
    unitPrice: float
    total: float

class Terms(BaseModel):
    cancellation: str
    payment: str
    insurance: str
    changes: str

class Testimonial(BaseModel):
    name: str
    rating: int
    text: str

class QuotationData(BaseModel):
    tripTitle: str
    customerName: str
    dates: str
    city: str
    bookingRef: str
    coverImage: str
    salesperson: Salesperson
    summary: Summary
    pricing: Pricing
    days: List[Day]
    gallery: Optional[List[GalleryItem]] = None
    costBreakdown: List[CostBreakdownItem]
    terms: Terms
    inclusions: Optional[List[str]] = None
    exclusions: Optional[List[str]] = None
    detailedTerms: Optional[str] = None
    privacyPolicy: Optional[str] = None
    testimonials: Optional[List[Testimonial]] = None

@app.get("/")
async def root():
    return {
        "message": "Travel Quotation PDF Generator API",
        "version": "1.0.0",
        "endpoints": {
            "generate_pdf": "POST /api/generate-pdf"
        }
    }

@app.post("/api/generate-pdf")
async def generate_pdf(data: QuotationData):
    """
    Generate PDF from quotation data
    """
    try:
        print(f"Received request for booking: {data.bookingRef}")
        
        # Read HTML template
        template_path = os.path.join(os.path.dirname(__file__), 'templates', 'pdf_template.html')
        print(f"Template path: {template_path}")
        
        with open(template_path, 'r', encoding='utf-8') as f:
            template_content = f.read()
        
        print("Template loaded successfully")
        
        # Render template with data
        template = Template(template_content)
        html_content = template.render(data=data.model_dump())
        
        print("Template rendered successfully")
        
        # Create temporary files
        temp_dir = tempfile.mkdtemp()
        html_file = os.path.join(temp_dir, 'quotation.html')
        pdf_file = os.path.join(temp_dir, f'quotation-{data.bookingRef}.pdf')
        
        print(f"Temp dir: {temp_dir}")
        
        # Write HTML to file
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        print(f"HTML file created: {html_file}")
        
        # Generate PDF using Playwright
        print("Starting Playwright...")
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            print("Browser launched")
            page = browser.new_page()
            print(f"Loading HTML: file://{html_file}")
            page.goto(f'file://{html_file}', wait_until='networkidle')
            print("Page loaded, generating PDF...")
            page.pdf(
                path=pdf_file,
                format='A4',
                print_background=True,
                margin={'top': '0', 'right': '0', 'bottom': '0', 'left': '0'}
            )
            browser.close()
        
        print(f"PDF generated: {pdf_file}")
        
        # Check if PDF was created
        if not os.path.exists(pdf_file):
            raise Exception("PDF file was not created")
        
        # Return PDF file
        response = FileResponse(
            pdf_file,
            media_type='application/pdf',
            filename=f'quotation-{data.bookingRef}.pdf'
        )
        
        # Clean up temp HTML file immediately
        os.remove(html_file)
        print("Success! Returning PDF")
        
        return response
        
    except Exception as e:
        print(f"Error: {str(e)}")
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"PDF generation failed: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8001))
    host = os.getenv("HOST", "0.0.0.0")
    uvicorn.run(app, host=host, port=port)