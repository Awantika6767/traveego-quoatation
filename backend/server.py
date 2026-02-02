import uuid
from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional, Dict
from playwright.async_api import async_playwright
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

class VisaItem(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    visa_type: str  # Tourist, Business, Student, etc.
    destination_country: str
    processing_time_days: int  # ETA in days
    cost_per_person: float
    number_of_people: int
    total_cost: float
    description: Optional[str] = None


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


class Testimonial(BaseModel):
    name: str
    rating: int
    text: str

# New Category Models

class FlightSegment(BaseModel):
    flight_number: str
    airline: str
    airline_logo: str  # URL to airline logo
    departure_airport: str
    departure_city: str
    departure_time: str
    departure_date: str
    arrival_airport: str
    arrival_city: str
    arrival_time: str
    arrival_date: str
    duration: str
    cabin_class: str  # Economy, Business, First
    baggage_checkin: str  # e.g., "15 KG"
    baggage_cabin: str  # e.g., "7 KG"

class FlightDetails(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    booking_reference: str
    total_passengers: int
    journey_type: str  # One-way, Round-trip, Multi-city
    segments: List[FlightSegment]
    total_cost: float
    cost_per_person: float
    notes: Optional[str] = None

class TrainSegment(BaseModel):
    train_number: str
    train_name: str
    departure_station: str
    departure_city: str
    departure_time: str
    departure_date: str
    arrival_station: str
    arrival_city: str
    arrival_time: str
    arrival_date: str
    duration: str
    class_type: str  # AC 1, AC 2, AC 3, Sleeper, etc.
    seat_numbers: Optional[str] = None

class TrainDetails(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    pnr: str
    total_passengers: int
    segments: List[TrainSegment]
    total_cost: float
    cost_per_person: float
    notes: Optional[str] = None

class BusSegment(BaseModel):
    bus_operator: str
    bus_type: str  # AC Sleeper, AC Seater, Non-AC, Volvo, etc.
    departure_location: str
    departure_time: str
    departure_date: str
    arrival_location: str
    arrival_time: str
    arrival_date: str
    duration: str
    seat_numbers: Optional[str] = None

class BusDetails(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    booking_reference: str
    total_passengers: int
    segments: List[BusSegment]
    total_cost: float
    cost_per_person: float
    notes: Optional[str] = None

class TransportWithinCity(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    vehicle_type: str  # Cab, Mini Bus, Traveller
    vehicle_name: Optional[str] = None  # e.g., Toyota Innova, Tempo Traveller
    capacity: int
    pickup_location: str
    drop_location: Optional[str] = None
    pickup_date: str
    pickup_time: str
    duration: str  # e.g., "4 hours", "Full day", "Airport transfer"
    total_cost: float
    cost_per_vehicle: float
    number_of_vehicles: int
    driver_details: Optional[str] = None
    notes: Optional[str] = None

class MICEEvent(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    event_type: str  # Meeting, Incentive, Conference, Exhibition
    event_name: str
    venue_name: str
    venue_address: str
    venue_image: Optional[str] = None
    capacity: int
    number_of_attendees: int
    event_date: str
    event_time: str
    duration: str  # e.g., "3 hours", "Full day"
    equipment_provided: Optional[List[str]] = None  # Projector, Sound System, etc.
    catering_included: bool
    catering_details: Optional[str] = None
    total_cost: float
    cost_per_person: float
    notes: Optional[str] = None

class StandaloneHotel(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    stars: int
    image: str
    address: str
    city: str
    check_in_date: str
    check_out_date: str
    number_of_nights: int
    room_type: str  # Deluxe, Suite, Standard, etc.
    number_of_rooms: int
    guests_per_room: int
    meal_plan: str  # EP, CP, MAP, AP
    amenities: Optional[List[str]] = None
    total_cost: float
    cost_per_room_per_night: float
    notes: Optional[str] = None

class SightseeingPlace(BaseModel):
    name: str
    description: str
    image: Optional[str] = None
    duration: str
    entry_fee_included: bool

class SightseeingPackage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    package_name: str
    city: str
    date: str
    start_time: str
    end_time: str
    duration: str
    places: List[SightseeingPlace]
    transport_included: bool
    transport_details: Optional[str] = None
    guide_included: bool
    meal_included: bool
    meal_details: Optional[str] = None
    total_cost: float
    cost_per_person: float
    number_of_people: int
    notes: Optional[str] = None

class QuoatationPDFData(BaseModel):
    # Basic Info (Always Required)
    tripTitle: str
    customerName: str
    dates: str
    city: str
    bookingRef: str
    coverImage: str
    salesperson: Salesperson
    summary: Summary
    pricing: Pricing
    
    # Selected Categories (Always Required)
    selected_categories: List[str]  # ["Holiday", "Visa", "Flight", etc.]
    
    # Category-specific data (Optional based on selected_categories)
    days: Optional[List[Day]] = None  # For Holiday packages
    visas: Optional[List[VisaItem]] = None  # For Visa services
    flights: Optional[List[FlightDetails]] = None  # For Flight bookings
    trains: Optional[List[TrainDetails]] = None  # For Train bookings
    buses: Optional[List[BusDetails]] = None  # For Bus bookings
    transports_within_city: Optional[List[TransportWithinCity]] = None  # For local transport
    mice_events: Optional[List[MICEEvent]] = None  # For MICE events
    standalone_hotels: Optional[List[StandaloneHotel]] = None  # For hotel-only bookings
    sightseeing_packages: Optional[List[SightseeingPackage]] = None  # For sightseeing
    
    # Common Optional Fields
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
async def generate_pdf(data: QuoatationPDFData):
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
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            print("Browser launched")
            page = await browser.new_page()
            print(f"Loading HTML: file://{html_file}")
            await page.goto(f'file://{html_file}', wait_until='networkidle')
            print("Page loaded, generating PDF...")
            await page.pdf(
                path=pdf_file,
                format='A4',
                print_background=True,
                margin={'top': '0', 'right': '0', 'bottom': '0', 'left': '0'}
            )
            await browser.close()
        
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