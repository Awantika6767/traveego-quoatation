import React from 'react';
import { MapPin, Phone, Mail, Star, Calendar, Users, Clock, CheckCircle2 } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const PDFPreview = ({ data, previewRef }) => {
  if (!data) return null;

  return (
    <div ref={previewRef} className="" style={{ fontFamily: "'Inter', sans-serif", width: '840px' }}>
      
      {/* Cover Page */}
      <div 
        className="relative h-[1188px] bg-cover bg-center flex flex-col justify-between p-12"
        style={{
          backgroundImage: `linear-gradient(rgba(12, 12, 12, 0.45), rgba(12, 12, 12, 0.15)), url(${data.coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-white">
          <div className="w-32 h-12 bg-white rounded flex items-center justify-center">
            <span className="text-2xl font-bold text-orange-600">Traveego</span>
          </div>
        </div>

        <div className="text-white">
          <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {data.customerName} — {data.tripTitle}
          </h1>
          <p className="text-2xl mb-2">{data.dates}</p>
          <p className="text-xl text-orange-400">{data.city}</p>
        </div>

        <div className="flex justify-between items-end">
          <div className="text-white text-sm">
            <p className="mb-1"><Phone className="inline w-4 h-4 mr-2" />{data.salesperson.phone}</p>
            <p className="mb-1"><Mail className="inline w-4 h-4 mr-2" />{data.salesperson.email}</p>
            <p className="text-xs mt-2">Booking Ref: {data.bookingRef}</p>
          </div>

          <div className="text-center">
            <div className="inline-block mb-2 rounded-lg overflow-hidden" style={{ border: '4px solid #FF6A00' }}>
              <QRCodeSVG className='rounded-sm' value={`https://traveego.com/book/${data.bookingRef}`} size={100} />
            </div>
            <p className="text-white text-sm">Scan to Book</p>
            <div className="mt-4 bg-white bg-opacity-90 rounded-lg px-6 py-4">
              <p className="text-3xl font-bold text-black">{data.pricing.currency} {data.pricing.total.toLocaleString()}</p>
              <p className="text-sm text-gray-600">{data.pricing.currency} {data.pricing.perPerson.toLocaleString()} per person</p>
              <div className="mt-2 bg-orange-600 text-white px-4 py-2 rounded text-sm font-semibold">
                Reserve Now
              </div>
            </div>
          </div>
        </div>

        <div 
          className="absolute top-0 right-0 w-32 h-32 bg-orange-600 flex items-center justify-center"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
        >
          <span className="text-white text-xs font-semibold transform rotate-45 mt-4 mr-4">
            Handcrafted
          </span>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="p-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
          Trip Overview
        </h2>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-orange-600">Highlights</h3>
            <ul className="space-y-3">
              {data.summary.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Calendar className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold text-gray-800">{data.summary.duration}</p>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Travelers</p>
                <p className="font-semibold text-gray-800">{data.summary.travelers}</p>
              </div>
              <div className="text-center">
                <Star className="w-6 h-6 text-orange-600 mx-auto mb-2 fill-orange-600" />
                <p className="text-sm text-gray-600">Rating</p>
                <p className="font-semibold text-gray-800">{data.summary.rating}/5</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-orange-600">Investment Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>{data.pricing.currency} {data.pricing.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Taxes & Fees</span>
                <span>{data.pricing.currency} {data.pricing.taxes.toLocaleString()}</span>
              </div>
              {data.pricing.discount > 0 && (
                <div className="flex justify-between text-red-600 font-semibold">
                  <span>Discount</span>
                  <span>- {data.pricing.currency} {data.pricing.discount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-xl font-bold text-black pt-3 border-t-2 border-gray-300">
                <span>Total</span>
                <span>{data.pricing.currency} {data.pricing.total.toLocaleString()}</span>
              </div>
              <div className="bg-orange-50 border-2 border-orange-600 rounded p-4 mt-4">
                <p className="text-sm text-gray-600 mb-1">Amount Due Now</p>
                <p className="text-2xl font-bold text-orange-600">{data.pricing.currency} {data.pricing.depositDue.toLocaleString()}</p>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <div className="flex-1 bg-gray-100 rounded px-3 py-2 text-center text-xs text-gray-600">
                🔒 Secure Payment
              </div>
              <div className="flex-1 bg-gray-100 rounded px-3 py-2 text-center text-xs text-gray-600">
                ✓ Verified Hotels
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Day by Day Itinerary */}
      <div className="p-12">
        <h2 className="text-3xl font-bold mb-8 text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
          Detailed Itinerary
        </h2>

        {data.days.map((day, idx) => (
          <div key={idx} className="mb-12 pb-12 border-b border-gray-200 last:border-b-0">
            <div className="flex gap-8">
              <div className="w-1/3">
                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg sticky top-4">
                  <div className="text-4xl font-bold text-orange-600 mb-2">Day {day.dayNumber}</div>
                  <div className="text-lg text-gray-800 mb-1">{day.date}</div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{day.location}</span>
                  </div>

                  {day.meals && (
                    <div className="mb-4 pb-4 border-b border-orange-200">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Meals</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">🍳 Breakfast:</span>
                          <span className={`font-semibold ${day.meals.breakfast === 'Included' ? 'text-green-600' : 'text-orange-600'}`}>
                            {day.meals.breakfast}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">🍽️ Lunch:</span>
                          <span className={`font-semibold ${day.meals.lunch === 'Included' ? 'text-green-600' : 'text-orange-600'}`}>
                            {day.meals.lunch}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">🍷 Dinner:</span>
                          <span className={`font-semibold ${day.meals.dinner === 'Included' ? 'text-green-600' : 'text-orange-600'}`}>
                            {day.meals.dinner}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {day.hotel && (
                    <div className="mt-4 pt-4 border-t border-orange-200">
                      <p className="text-sm text-gray-600 mb-2">Overnight Stay</p>
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                        <img 
                          src={day.hotel.image} 
                          alt={day.hotel.name}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-3">
                          <p className="font-semibold text-gray-800 text-sm">{day.hotel.name}</p>
                          <div className="flex gap-1 mt-1">
                            {[...Array(day.hotel.stars)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-2/3 space-y-6">
                {day.activities.map((activity, actIdx) => (
                  <div 
                    key={actIdx} 
                    className={`bg-white border-2 rounded-lg p-6 ${
                      activity.type === 'included' ? 'border-orange-200' : 'border-red-200 border-dashed'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-orange-100 rounded-full p-2">
                          <Clock className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-sm text-orange-600 font-semibold">{activity.time}</p>
                          <h3 className="text-lg font-bold text-gray-800">{activity.title}</h3>
                        </div>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                        activity.type === 'included' 
                          ? 'bg-orange-100 text-orange-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {activity.type === 'included' ? 'Included' : 'Optional'}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">{activity.description}</p>

                    {activity.images && activity.images.length > 0 && (
                      <div className="flex gap-2 mb-4">
                        {activity.images.map((img, imgIdx) => (
                          <img 
                            key={imgIdx}
                            src={img} 
                            alt={activity.title}
                            className="w-24 h-24 object-cover rounded border border-gray-200"
                          />
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{activity.meetingPoint}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hotel Details */}
      <div className="p-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
          Accommodation
        </h2>

        <div className="space-y-6">
          {data.days
            .filter((day, idx, arr) => 
              idx === 0 || day.hotel.name !== arr[idx - 1].hotel.name
            )
            .map((day, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-2 gap-6 p-6">
                  <img 
                    src={day.hotel.image} 
                    alt={day.hotel.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{day.hotel.name}</h3>
                    <div className="flex gap-1 mb-4">
                      {[...Array(day.hotel.stars)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                    <div className="flex items-start gap-2 text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span>{day.hotel.address}</span>
                    </div>
                    {day.hotel.amenities && (
                      <div className="flex flex-wrap gap-2">
                        {day.hotel.amenities.map((amenity, aIdx) => (
                          <span 
                            key={aIdx}
                            className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Inclusions */}
      {data.inclusions && data.inclusions.length > 0 && (
        <div className="p-12 bg-white">
          <h2 className="text-3xl font-bold mb-8 text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            What's Included
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {data.inclusions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Exclusions */}
      {data.exclusions && data.exclusions.length > 0 && (
        <div className="p-12 bg-gray-50">
          <h2 className="text-3xl font-bold mb-8 text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            What's Not Included
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {data.exclusions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Terms & Conditions */}
      {data.detailedTerms && (
        <div className="p-12 bg-white">
          <h2 className="text-3xl font-bold mb-8 text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            Terms & Conditions
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="prose max-w-none text-gray-700 text-sm whitespace-pre-line">
              {data.detailedTerms}
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy */}
      {data.privacyPolicy && (
        <div className="p-12 bg-gray-50">
          <h2 className="text-3xl font-bold mb-8 text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            Privacy Policy
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="prose max-w-none text-gray-700 text-sm whitespace-pre-line">
              {data.privacyPolicy}
            </div>
          </div>
        </div>
      )}

      {/* Cost Breakdown */}
      <div className="p-12">
        <h2 className="text-3xl font-bold mb-8 text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
          Investment Breakdown
        </h2>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-orange-600 text-white">
              <tr>
                <th className="text-left p-4">Item</th>
                <th className="text-center p-4">Quantity</th>
                <th className="text-right p-4">Unit Price</th>
                <th className="text-right p-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {data.costBreakdown.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-200">
                  <td className="p-4 text-gray-800">{item.item}</td>
                  <td className="p-4 text-center text-gray-600">{item.qty}</td>
                  <td className="p-4 text-right text-gray-600">
                    {data.pricing.currency} {item.unitPrice.toLocaleString()}
                  </td>
                  <td className="p-4 text-right font-semibold text-gray-800">
                    {data.pricing.currency} {item.total.toLocaleString()}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-50">
                <td colSpan="3" className="p-4 text-right font-semibold text-gray-800">Subtotal</td>
                <td className="p-4 text-right font-semibold text-gray-800">
                  {data.pricing.currency} {data.pricing.subtotal.toLocaleString()}
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td colSpan="3" className="p-4 text-right text-gray-700">Taxes & Fees</td>
                <td className="p-4 text-right text-gray-700">
                  {data.pricing.currency} {data.pricing.taxes.toLocaleString()}
                </td>
              </tr>
              {data.pricing.discount > 0 && (
                <tr className="bg-red-50">
                  <td colSpan="3" className="p-4 text-right font-semibold text-red-600">Discount</td>
                  <td className="p-4 text-right font-semibold text-red-600">
                    - {data.pricing.currency} {data.pricing.discount.toLocaleString()}
                  </td>
                </tr>
              )}
              <tr className="bg-black text-white">
                <td colSpan="3" className="p-4 text-right text-xl font-bold">Grand Total</td>
                <td className="p-4 text-right text-xl font-bold">
                  {data.pricing.currency} {data.pricing.total.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-6 bg-orange-50 border-2 border-orange-600 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600 mb-1">Deposit Required to Confirm</p>
              <p className="text-3xl font-bold text-orange-600">
                {data.pricing.currency} {data.pricing.depositDue.toLocaleString()}
              </p>
            </div>
            <div className="text-center">
              <QRCodeSVG value={`https://traveego.com/pay/${data.bookingRef}`} size={100} />
              <p className="text-xs text-gray-600 mt-2">Scan to Pay</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="p-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-black text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
          What Our Travelers Say
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {data.testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-800">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & CTA */}
      <div className="p-12 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl">Let's make this trip a reality</p>
        </div>

        <div className="flex items-center justify-center gap-12 mb-8">
          <img 
            src={data.salesperson.photo} 
            alt={data.salesperson.name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <div className="text-left">
            <p className="text-lg mb-2">Your Travel Expert</p>
            <p className="text-3xl font-bold mb-4">{data.salesperson.name}</p>
            <p className="flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5" />
              {data.salesperson.phone}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              {data.salesperson.email}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <div className="bg-white text-center p-8 rounded-lg shadow-xl">
            <QRCodeSVG value={`https://traveego.com/book/${data.bookingRef}`} size={120} />
            <p className="text-black font-bold mt-4 text-lg">Scan to Book Now</p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-orange-100">
          <p className="mb-2">✓ 1200+ Successful Trips | ✓ 24/7 Support | ✓ Flexible Cancellation</p>
          <p>Booking Reference: {data.bookingRef}</p>
        </div>
      </div>
    </div>
  );
};

export default PDFPreview;