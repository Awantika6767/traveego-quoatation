export const mockQuotationData = {
  tripTitle: "7-Day Goa Escape",
  customerName: "Abhinav Kumar",
  dates: "March 15-22, 2025",
  city: "Goa, India",
  bookingRef: "TRV2025-GOA-001",
  coverImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&h=900&fit=crop",
  
  salesperson: {
    name: "Priya Sharma",
    phone: "+91 98765 43210",
    email: "priya@traveego.com",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
  },
  
  summary: {
    duration: "7 Days / 6 Nights",
    travelers: 2,
    rating: 4.8,
    highlights: [
      "Beach hopping in North & South Goa",
      "Water sports & adventure activities",
      "Portuguese heritage tour",
      "Sunset cruise on Mandovi River",
      "Local seafood & Goan cuisine"
    ]
  },
  
  pricing: {
    subtotal: 82500,
    taxes: 14850,
    discount: 5000,
    total: 92350,
    perPerson: 46175,
    depositDue: 25000,
    currency: "INR"
  },
  
  days: [
    {
      dayNumber: 1,
      date: "March 15, 2025",
      location: "North Goa",
      meals: {
        breakfast: "Included",
        lunch: "Included",
        dinner: "Included"
      },
      hotel: {
        name: "Coastal Paradise Resort",
        stars: 4,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        address: "Calangute Beach Road, North Goa, 403516",
        amenities: ["Pool", "Spa", "Beach Access", "Restaurant"]
      },
      activities: [
        {
          time: "10:00 AM",
          title: "Airport Pickup & Hotel Check-in",
          description: "Our representative will greet you at Goa Airport and transfer you to your hotel.",
          images: ["https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=600&fit=crop"],
          meetingPoint: "Goa International Airport, Arrival Hall",
          type: "included"
        },
        {
          time: "2:00 PM",
          title: "Lunch at Beach Shack",
          description: "Enjoy authentic Goan seafood at a popular beach shack with ocean views.",
          images: ["https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=600&fit=crop"],
          meetingPoint: "Calangute Beach",
          type: "included"
        },
        {
          time: "5:00 PM",
          title: "Sunset at Baga Beach",
          description: "Relax and watch the beautiful Goan sunset at the famous Baga Beach.",
          images: ["https://images.unsplash.com/photo-1561413213-d7b57e5f5c4c?w=600&h=600&fit=crop"],
          meetingPoint: "Baga Beach",
          type: "included"
        }
      ]
    },
    {
      dayNumber: 2,
      date: "March 16, 2025",
      location: "North Goa",
      hotel: {
        name: "Coastal Paradise Resort",
        stars: 4,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        address: "Calangute Beach Road, North Goa, 403516"
      },
      activities: [
        {
          time: "9:00 AM",
          title: "Water Sports at Calangute",
          description: "Parasailing, jet skiing, and banana boat rides (2 activities included).",
          images: ["https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=600&fit=crop"],
          meetingPoint: "Calangute Beach Water Sports Center",
          type: "included"
        },
        {
          time: "1:00 PM",
          title: "Fort Aguada Visit",
          description: "Explore the 17th-century Portuguese fort with stunning coastal views.",
          images: ["https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=600&fit=crop"],
          meetingPoint: "Fort Aguada Parking",
          type: "included"
        },
        {
          time: "7:00 PM",
          title: "Night Market Shopping",
          description: "Optional visit to Anjuna Flea Market for souvenirs and handicrafts.",
          images: ["https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=600&fit=crop"],
          meetingPoint: "Anjuna Market",
          type: "optional"
        }
      ]
    },
    {
      dayNumber: 3,
      date: "March 17, 2025",
      location: "South Goa",
      hotel: {
        name: "Serene Beach Villa",
        stars: 5,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        address: "Palolem Beach, South Goa, 403702",
        amenities: ["Private Beach", "Infinity Pool", "Yoga Studio", "Fine Dining"]
      },
      activities: [
        {
          time: "11:00 AM",
          title: "Transfer to South Goa",
          description: "Scenic drive through countryside to your luxury villa in Palolem.",
          images: ["https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop"],
          meetingPoint: "Hotel Lobby",
          type: "included"
        },
        {
          time: "3:00 PM",
          title: "Palolem Beach Relaxation",
          description: "Unwind at one of Goa's most beautiful and peaceful beaches.",
          images: ["https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=600&h=600&fit=crop"],
          meetingPoint: "Palolem Beach",
          type: "included"
        }
      ]
    }
  ],
  
  gallery: [
    { url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop", caption: "Goa Beaches" },
    { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop", caption: "Water Sports" },
    { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop", caption: "Luxury Resort" },
    { url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&h=800&fit=crop", caption: "Fort Aguada" },
    { url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop", caption: "Night Market" },
    { url: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=1200&h=800&fit=crop", caption: "Palolem Beach" }
  ],
  
  costBreakdown: [
    { item: "Hotel Accommodation (6 nights)", qty: 2, unitPrice: 25000, total: 50000 },
    { item: "Daily Breakfast & Lunch", qty: 7, unitPrice: 1500, total: 10500 },
    { item: "Airport Transfers", qty: 2, unitPrice: 1500, total: 3000 },
    { item: "Water Sports Package", qty: 2, unitPrice: 3500, total: 7000 },
    { item: "Guided Tours & Entry Fees", qty: 2, unitPrice: 4000, total: 8000 },
    { item: "Sunset Cruise", qty: 2, unitPrice: 2000, total: 4000 }
  ],
  
  terms: {
    cancellation: "Free cancellation up to 15 days before travel. 50% refund if cancelled 7-14 days before. Non-refundable within 7 days.",
    payment: "25% deposit required to confirm booking. Balance due 7 days before departure.",
    insurance: "Travel insurance highly recommended. We partner with leading insurance providers.",
    changes: "Date changes subject to availability and may incur additional charges."
  },
  
  testimonials: [
    { name: "Rahul & Sneha", rating: 5, text: "Amazing trip! Every detail was perfectly planned. The hotels exceeded our expectations." },
    { name: "Amit Patel", rating: 5, text: "Best vacation ever! The water sports and beach hopping were highlights. Highly recommend!" },
    { name: "Priya & Family", rating: 4, text: "Wonderful family experience. Kids loved the beaches and activities. Great value for money." }
  ]
};