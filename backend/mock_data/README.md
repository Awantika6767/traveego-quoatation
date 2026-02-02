# Mock JSON Data for Travel Quotation PDF Generator

This directory contains mock JSON files for testing different category combinations of the travel quotation system.

## Category Overview

The system supports 7 categories:
1. **Holiday** - Complete vacation packages with itinerary
2. **MICE** - Meetings, Incentives, Conferences, Events
3. **Transport within city** - Local vehicle bookings (Cab, Mini Bus, Traveller)
4. **Transport outside city** - Flight, Train, Bus bookings
5. **Visa** - Visa processing services
6. **Hotel** - Standalone hotel bookings
7. **Sightseeing** - Sightseeing tour packages

## Available Mock Files

### Single Category Examples

1. **1_flight_only.json** - Flight booking only (Mumbai to Dubai round-trip)
2. **2_visa_only.json** - Visa processing only (Dubai Tourist Visa)
3. **5_mice_only.json** - MICE event only (Corporate conference)
4. **6_transport_city_only.json** - Local transport only (Airport transfer)
5. **7_hotel_only.json** - Hotel booking only (Jaipur heritage hotel)
6. **8_sightseeing_only.json** - Sightseeing tour only (Delhi day tour)
7. **10_train_only.json** - Train booking only (Mumbai to Goa)

### Multi-Category Combinations

8. **3_flight_visa_combo.json** - Flight + Visa (Complete Dubai travel)
9. **4_holiday_flight_combo.json** - Holiday + Flight (Goa vacation package)
10. **9_complete_package.json** - Flight + Visa + Hotel + MICE + Sightseeing (Premium Dubai package)

## How to Use

### Testing with Backend API

```bash
# Test with Flight only
curl -X POST http://localhost:8001/api/generate-pdf \
  -H "Content-Type: application/json" \
  -d @mock_data/1_flight_only.json \
  --output flight_quotation.pdf

# Test with complete package
curl -X POST http://localhost:8001/api/generate-pdf \
  -H "Content-Type: application/json" \
  -d @mock_data/9_complete_package.json \
  --output complete_quotation.pdf
```

### Testing with Frontend

1. Copy the content of any mock JSON file
2. Paste it into the JSON Input field in the frontend
3. Click "Load & Preview"
4. Click "Download PDF" to generate

## JSON Structure

### Required Fields (Always)
```json
{
  "tripTitle": "string",
  "customerName": "string",
  "dates": "string",
  "city": "string",
  "bookingRef": "string",
  "coverImage": "string (URL)",
  "salesperson": { ... },
  "summary": { ... },
  "pricing": { ... },
  "selected_categories": ["array of category names"]
}
```

### Optional Category-Specific Fields
- `days`: Array (for Holiday packages)
- `flights`: Array (for Flight bookings)
- `trains`: Array (for Train bookings)
- `buses`: Array (for Bus bookings)
- `transports_within_city`: Array (for local transport)
- `visas`: Array (for Visa services)
- `standalone_hotels`: Array (for hotel bookings)
- `mice_events`: Array (for MICE events)
- `sightseeing_packages`: Array (for sightseeing tours)

## Key Features

### Flight Details
- Includes airline logo URLs
- Full journey details (departure/arrival times, airports)
- Baggage information (check-in and cabin)
- Multiple segments support (for connecting flights)

### Train Details
- PNR number
- Train name and number
- Station details with timings
- Seat/berth numbers
- Class type (AC 1/2/3, Sleeper, etc.)

### MICE Events
- Venue details with images
- Equipment provided
- Catering information
- Capacity and attendee count

### Sightseeing
- Multiple places to visit
- Individual place descriptions with images
- Transport and guide inclusion
- Meal details

## Notes

- All image URLs are from Unsplash (free stock photos)
- Airline logos use Wikipedia Commons URLs
- Prices are in INR (Indian Rupees)
- All dates are set in 2025 for future bookings
- Booking references follow pattern: TRV2025-XXX-001

## Creating Custom Mock Data

To create your own mock JSON:

1. Start with a template from any existing file
2. Modify the `selected_categories` array with your desired categories
3. Add/remove category-specific data arrays based on selection
4. Ensure all required fields are present
5. Test with the backend API

## Validation

The backend uses Pydantic models to validate:
- All required fields are present
- Data types are correct
- Optional fields can be null/undefined
- Category-specific data matches selected categories
