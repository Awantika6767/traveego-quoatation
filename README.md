# Travel Quotation PDF Generator API

A FastAPI-based backend service that generates professional PDF quotations from JSON data using Playwright for HTML-to-PDF conversion.

## Features

- ✅ Pure backend API (no frontend)
- ✅ Accepts JSON data via POST request
- ✅ Generates high-quality PDFs with custom design
- ✅ Includes all quotation sections: itinerary, meals, inclusions, exclusions, terms & conditions, privacy policy
- ✅ QR codes for booking links
- ✅ Professional travel quotation template

## API Endpoint

### POST `/api/generate-pdf`

Generates a PDF quotation from the provided JSON data.

**Request:**
- Method: `POST`
- URL: `http://localhost:8001/api/generate-pdf`
- Headers: `Content-Type: application/json`
- Body: JSON object with quotation data (see structure below)

**Response:**
- Content-Type: `application/pdf`
- Downloadable PDF file

## JSON Data Structure

```json
{
  "tripTitle": "7-Day Goa Escape",
  "customerName": "John Doe",
  "dates": "March 15-22, 2025",
  "city": "Goa, India",
  "bookingRef": "TRV2025-GOA-001",
  "coverImage": "https://example.com/cover-image.jpg",
  
  "salesperson": {
    "name": "Priya Sharma",
    "phone": "+91 98765 43210",
    "email": "priya@traveego.com",
    "photo": "https://example.com/salesperson-photo.jpg"
  },
  
  "summary": {
    "duration": "7 Days / 6 Nights",
    "travelers": 2,
    "rating": 4.8,
    "highlights": [
      "Beach hopping in North & South Goa",
      "Water sports & adventure activities"
    ]
  },
  
  "pricing": {
    "subtotal": 82500,
    "taxes": 14850,
    "discount": 5000,
    "total": 92350,
    "perPerson": 46175,
    "depositDue": 25000,
    "currency": "INR"
  },
  
  "days": [
    {
      "dayNumber": 1,
      "date": "March 15, 2025",
      "location": "North Goa",
      "meals": {
        "breakfast": "Included",
        "lunch": "Self Sponsored",
        "dinner": "Included"
      },
      "hotel": {
        "name": "Coastal Paradise Resort",
        "stars": 4,
        "image": "https://example.com/hotel.jpg",
        "address": "Calangute Beach Road, North Goa, 403516",
        "amenities": ["Pool", "Spa", "Beach Access"]
      },
      "activities": [
        {
          "time": "10:00 AM",
          "title": "Airport Pickup",
          "description": "Our representative will greet you",
          "images": ["https://example.com/activity.jpg"],
          "meetingPoint": "Goa Airport",
          "type": "included"
        }
      ]
    }
  ],
  
  "gallery": [
    { "url": "https://example.com/image.jpg", "caption": "Beach" }
  ],
  
  "costBreakdown": [
    { "item": "Hotel (6 nights)", "qty": 2, "unitPrice": 25000, "total": 50000 }
  ],
  
  "terms": {
    "cancellation": "Free cancellation up to 15 days",
    "payment": "25% deposit required",
    "insurance": "Travel insurance recommended",
    "changes": "Date changes subject to availability"
  },
  
  "inclusions": [
    "Accommodation in 4 & 5-star hotels",
    "Daily breakfast at all hotels"
  ],
  
  "exclusions": [
    "International or domestic airfare",
    "Personal expenses"
  ],
  
  "detailedTerms": "Complete terms and conditions text...",
  "privacyPolicy": "Complete privacy policy text...",
  
  "testimonials": [
    { "name": "John Smith", "rating": 5, "text": "Amazing trip!" }
  ]
}
```

## Usage Examples

### Using cURL

```bash
curl -X POST http://localhost:8001/api/generate-pdf \
  -H "Content-Type: application/json" \
  -d @quotation_data.json \
  --output quotation.pdf
```

### Using Python (requests)

```python
import requests

with open('quotation_data.json', 'r') as f:
    data = f.read()

response = requests.post(
    'http://localhost:8001/api/generate-pdf',
    headers={'Content-Type': 'application/json'},
    data=data
)

with open('quotation.pdf', 'wb') as f:
    f.write(response.content)
```

### Using JavaScript (fetch)

```javascript
const data = {
  // ... your quotation data
};

fetch('http://localhost:8001/api/generate-pdf', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then(response => response.blob())
.then(blob => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'quotation.pdf';
  a.click();
});
```

## Installation & Setup

### Prerequisites
- Python 3.11+
- pip

### Install Dependencies

```bash
cd /app/backend
pip install -r requirements.txt
playwright install chromium
```

### Run Server

```bash
cd /app/backend
python server.py
```

The server will start on `http://0.0.0.0:8001`

## API Documentation

Once the server is running, visit:
- API Root: `http://localhost:8001/`
- Interactive API docs: `http://localhost:8001/docs`
- Alternative docs: `http://localhost:8001/redoc`

## Environment Variables

Create a `.env` file in the `/app/backend` directory:

```env
PORT=8001
HOST=0.0.0.0
```

## PDF Features

The generated PDF includes:

1. **Cover Page** - Professional cover with trip title, customer name, pricing, and QR code
2. **Trip Overview** - Summary with highlights, duration, travelers, and pricing breakdown
3. **Detailed Itinerary** - Day-by-day activities with times, descriptions, and images
4. **Meals Information** - Breakfast, lunch, dinner status for each day
5. **Accommodation** - Hotel details with photos, ratings, and amenities
6. **Inclusions** - What's included in the package
7. **Exclusions** - What's not included
8. **Terms & Conditions** - Detailed booking and cancellation policies
9. **Privacy Policy** - Data protection and privacy information
10. **Cost Breakdown** - Itemized pricing table
11. **Testimonials** - Customer reviews
12. **Contact Section** - Salesperson details and booking QR codes

## Error Handling

The API returns appropriate HTTP status codes:
- `200 OK` - PDF generated successfully
- `422 Unprocessable Entity` - Invalid JSON structure
- `500 Internal Server Error` - PDF generation failed

Error response format:
```json
{
  "detail": "PDF generation failed: <error message>"
}
```

## Performance

- Average PDF generation time: 3-5 seconds
- PDF file size: 3-5 MB (depends on images)
- Concurrent requests: Supported (async API)

## Tech Stack

- **Framework**: FastAPI
- **PDF Generation**: Playwright (Chromium)
- **Templating**: Jinja2
- **Server**: Uvicorn
- **Data Validation**: Pydantic

## License

This API is part of the Travel Quotation Generator project.