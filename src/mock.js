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
      meals: {
        breakfast: "Included",
        lunch: "Self Sponsored",
        dinner: "Included"
      },
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
      meals: {
        breakfast: "Included",
        lunch: "Included",
        dinner: "Self Sponsored"
      },
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
  
  terms: {
    cancellation: "Free cancellation up to 15 days before travel. 50% refund if cancelled 7-14 days before. Non-refundable within 7 days.",
    payment: "25% deposit required to confirm booking. Balance due 7 days before departure.",
    insurance: "Travel insurance highly recommended. We partner with leading insurance providers.",
    changes: "Date changes subject to availability and may incur additional charges."
  },
  
  inclusions: [
    "Accommodation in 4 & 5-star hotels as per itinerary",
    "Daily breakfast at all hotels",
    "Lunch on Day 1 and Day 3",
    "Dinner on Day 1 and Day 2",
    "Airport pickup and drop-off in private vehicle",
    "All inter-city transfers in air-conditioned vehicles",
    "English-speaking tour guide for sightseeing tours",
    "Water sports package (2 activities per person)",
    "Entry fees to Fort Aguada and other monuments",
    "Sunset cruise on Mandovi River",
    "All current applicable taxes and service charges",
    "24/7 travel assistance and emergency support"
  ],
  
  exclusions: [
    "International or domestic airfare to/from Goa",
    "Visa fees and travel insurance",
    "Lunch on Day 2 and any meals not mentioned in inclusions",
    "Dinner on Day 3 and subsequent days",
    "Personal expenses such as laundry, telephone calls, tips, and beverages",
    "Optional activities and excursions not mentioned in the itinerary",
    "Any meals or services not specifically mentioned in inclusions",
    "Camera fees at monuments and tourist attractions",
    "Cost of any additional transfers or sightseeing not included in itinerary",
    "Any expenses arising due to unforeseen circumstances like natural disasters, flight delays, political unrest, etc.",
    "GST as applicable (currently 5% on tour packages)",
    "Any increase in taxes or fuel surcharges prior to departure"
  ],
  
  detailedTerms: `BOOKING & PAYMENT TERMS:
1. A non-refundable deposit of 25% of the total tour cost is required at the time of booking to confirm your reservation.
2. The balance payment (75%) must be paid no later than 7 days before the departure date.
3. Payments can be made via bank transfer, credit card, debit card, or UPI. Payment gateway charges, if any, will be borne by the customer.
4. Bookings made within 7 days of departure require full payment at the time of booking.

CANCELLATION POLICY:
1. Cancellations made 15 days or more before departure: Full refund minus the 25% deposit.
2. Cancellations made 7-14 days before departure: 50% refund of the total tour cost.
3. Cancellations made less than 7 days before departure: No refund.
4. No-shows on the day of departure: No refund.
5. Refunds will be processed within 14-21 business days of cancellation.

AMENDMENTS & CHANGES:
1. Date changes are subject to availability and may incur additional charges based on seasonality and hotel policies.
2. Changes to passenger names or traveler details must be notified at least 7 days before departure.
3. Any amendments requested within 7 days of departure may not be possible and will be subject to supplier terms.

TRAVEL INSURANCE:
1. We strongly recommend purchasing comprehensive travel insurance covering medical emergencies, trip cancellations, lost baggage, and personal accidents.
2. Traveego is not responsible for any losses incurred due to lack of insurance coverage.

HEALTH & SAFETY:
1. All travelers must be medically fit to undertake the tour. Any pre-existing medical conditions must be disclosed at the time of booking.
2. Travelers are responsible for obtaining necessary vaccinations and medical clearances.
3. We reserve the right to refuse service to any traveler deemed unfit or whose behavior may endanger other guests.

FORCE MAJEURE:
1. Traveego shall not be liable for any failure to perform its obligations due to circumstances beyond our control including but not limited to acts of God, natural disasters, war, terrorism, civil unrest, strikes, pandemics, government restrictions, or any other force majeure events.
2. In such cases, we will work with you to reschedule or provide alternative arrangements where possible.

LIABILITY:
1. Traveego acts only as an agent for hotels, transportation providers, and activity operators. We are not liable for any loss, injury, damage, or delay arising from acts or omissions of these third parties.
2. Travelers are responsible for their personal belongings and valuables at all times.
3. Our maximum liability is limited to the total tour cost paid by the traveler.

COMPLAINTS & DISPUTES:
1. Any complaints must be reported to our tour guide or representative immediately during the trip for prompt resolution.
2. Written complaints must be submitted within 7 days of tour completion for consideration.
3. All disputes are subject to the jurisdiction of courts in [Your City], India.`,

  privacyPolicy: `PRIVACY POLICY

Last Updated: March 2025

At Traveego, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our services.

INFORMATION WE COLLECT:
1. Personal Information: Name, email address, phone number, postal address, date of birth, passport details, and emergency contact information.
2. Payment Information: Credit/debit card details, billing address, and transaction history (processed securely through encrypted payment gateways).
3. Travel Preferences: Dietary requirements, room preferences, special needs, and accessibility requirements.
4. Technical Data: IP address, browser type, device information, and cookies for website functionality and analytics.

HOW WE USE YOUR INFORMATION:
1. To process and confirm your travel bookings and reservations.
2. To communicate with you about your trip, including itinerary updates, travel documents, and customer support.
3. To process payments and prevent fraudulent transactions.
4. To personalize your experience and provide relevant travel recommendations.
5. To send promotional offers, newsletters, and marketing communications (with your consent).
6. To improve our services, website functionality, and customer experience.
7. To comply with legal obligations and respond to lawful requests from authorities.

SHARING YOUR INFORMATION:
We may share your information with:
1. Hotels, airlines, tour operators, and other service providers necessary to fulfill your booking.
2. Payment processors and financial institutions to complete transactions.
3. Government authorities when required by law or for immigration/customs purposes.
4. Marketing partners (only with your explicit consent).

We do NOT sell your personal information to third parties.

DATA SECURITY:
1. We implement industry-standard security measures including SSL encryption, secure servers, and access controls.
2. Payment information is processed through PCI-DSS compliant payment gateways.
3. Our staff is trained on data protection and confidentiality practices.
4. Regular security audits are conducted to identify and address vulnerabilities.

YOUR RIGHTS:
You have the right to:
1. Access the personal information we hold about you.
2. Request correction of inaccurate or incomplete data.
3. Request deletion of your data (subject to legal retention requirements).
4. Opt-out of marketing communications at any time.
5. Withdraw consent for data processing (where applicable).
6. Lodge a complaint with relevant data protection authorities.

COOKIES:
We use cookies to enhance your browsing experience, analyze website traffic, and personalize content. You can manage cookie preferences through your browser settings.

DATA RETENTION:
We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Booking records are typically retained for 7 years for accounting and legal purposes.

CHILDREN'S PRIVACY:
Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children without parental consent.

CHANGES TO THIS POLICY:
We may update this Privacy Policy periodically. Changes will be posted on our website with the revised effective date. Continued use of our services after changes constitutes acceptance of the updated policy.

CONTACT US:
For privacy-related inquiries, data access requests, or concerns, please contact:
Email: privacy@traveego.com
Phone: +91 98765 43210
Address: Traveego Tours & Travels, [Complete Address]

CONSENT:
By using our services and providing your information, you consent to the collection, use, and disclosure of your data as described in this Privacy Policy.`,
  
  testimonials: [
    { name: "Rahul & Sneha", rating: 5, text: "Amazing trip! Every detail was perfectly planned. The hotels exceeded our expectations." },
    { name: "Amit Patel", rating: 5, text: "Best vacation ever! The water sports and beach hopping were highlights. Highly recommend!" },
    { name: "Priya & Family", rating: 4, text: "Wonderful family experience. Kids loved the beaches and activities. Great value for money." }
  ]
};