import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, Globe, Shield, UserCheck } from 'lucide-react';




const COUNTRIES = [
  'United Kingdom',
  'United States',
  'Canada',
  'Germany',
  'France',
  'Australia',
  'United Arab Emirates',
  'Pakistan',
  'Indonesia',
  'India',
  'Turkey',
  'Malaysia',
  'Russia',
  'China',
  'Japan',
  'Brazil',
  'South Africa',
  'Egypt'
];

const VISA_TYPES = [
  { value: 'tourist', label: 'Tourist Visa (e-Visa)' },
  { value: 'umrah', label: 'Umrah Visa' },
  { value: 'hajj', label: 'Hajj Visa' },
  { value: 'business', label: 'Business / Commercial Visa' },
  { value: 'family', label: 'Family Visit Visa' },
  { value: 'student', label: 'Student Visa' }
];

export default function VisaForm({ onSuccess }){
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    country: '',
    visaType: '',
    travelDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error label when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.country) newErrors.country = 'Please select a country';
    if (!formData.visaType) newErrors.visaType = 'Please select a visa type';
    if (!formData.travelDate) newErrors.travelDate = 'Travel date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate server ingestion delay
    setTimeout(() => {
      const referenceNo = 'KSA-' + Math.floor(100000 + Math.random() * 900000);
     const newInquiry = {
        ...formData,
        id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
        status: 'Pending Review',
        submittedAt: new Date().toLocaleDateString(undefined, {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        referenceNo
      };

      // Save to localStorage
      const existing = localStorage.getItem('saudi_visa_inquiries');
      const inquiriesList = existing ? JSON.parse(existing) : [];
      inquiriesList.unshift(newInquiry);
      localStorage.setItem('saudi_visa_inquiries', JSON.stringify(inquiriesList));

      setIsSubmitting(false);
      onSuccess(newInquiry);

      // Reset form
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        country: '',
        visaType: '',
        travelDate: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <form id="visa-application-form" onSubmit={handleSubmit} className="space-y-6 w-full">
      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[#8A9BA8] font-bold text-[10px] tracking-wider uppercase font-sans">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            className={`w-full px-5 py-3.5 bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] focus:bg-white border rounded-[16px] text-sm text-[#1B365D] font-medium font-sans outline-none transition-all duration-200 ${
              errors.fullName ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-[#EBE6E0] focus:border-[#E06A3B]'
            }`}
          />
          {errors.fullName && <span className="text-[10px] text-red-500 font-medium pl-1">{errors.fullName}</span>}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[#8A9BA8] font-bold text-[10px] tracking-wider uppercase font-sans">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+1 555 000 0000"
            className={`w-full px-5 py-3.5 bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] focus:bg-white border rounded-[16px] text-sm text-[#1B365D] font-medium font-sans outline-none transition-all duration-200 ${
              errors.phoneNumber ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-[#EBE6E0] focus:border-[#E06A3B]'
            }`}
          />
          {errors.phoneNumber && <span className="text-[10px] text-red-500 font-medium pl-1">{errors.phoneNumber}</span>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[#8A9BA8] font-bold text-[10px] tracking-wider uppercase font-sans">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@email.com"
            className={`w-full px-5 py-3.5 bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] focus:bg-white border rounded-[16px] text-sm text-[#1B365D] font-medium font-sans outline-none transition-all duration-200 ${
              errors.email ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-[#EBE6E0] focus:border-[#E06A3B]'
            }`}
          />
          {errors.email && <span className="text-[10px] text-red-500 font-medium pl-1">{errors.email}</span>}
        </div>

        {/* Country */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[#8A9BA8] font-bold text-[10px] tracking-wider uppercase font-sans">
            Country
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`w-full px-5 py-3.5 bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] focus:bg-white border rounded-[16px] text-sm text-[#1B365D] font-medium font-sans outline-none transition-all duration-200 appearance-none bg-no-repeat bg-[right_1.25rem_center] ${
              errors.country ? 'border-red-400' : 'border-[#EBE6E0] focus:border-[#E06A3B]'
            }`}
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%238A9BA8' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`, paddingRight: '2.5rem', backgroundSize: '1.25rem' }}
          >
            <option value="">Select country</option>
            {COUNTRIES.map(cty => (
              <option key={cty} value={cty}>{cty}</option>
            ))}
          </select>
          {errors.country && <span className="text-[10px] text-red-500 font-medium pl-1">{errors.country}</span>}
        </div>

        {/* Visa Type */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[#8A9BA8] font-bold text-[10px] tracking-wider uppercase font-sans">
            Visa Type
          </label>
          <select
            name="visaType"
            value={formData.visaType}
            onChange={handleChange}
            className={`w-full px-5 py-3.5 bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] focus:bg-white border rounded-[16px] text-sm text-[#1B365D] font-medium font-sans outline-none transition-all duration-200 appearance-none bg-no-repeat bg-[right_1.25rem_center] ${
              errors.visaType ? 'border-red-400' : 'border-[#EBE6E0] focus:border-[#E06A3B]'
            }`}
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%238A9BA8' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`, paddingRight: '2.5rem', backgroundSize: '1.25rem' }}
          >
            <option value="">Select a visa</option>
            {VISA_TYPES.map(vt => (
              <option key={vt.value} value={vt.value}>{vt.label}</option>
            ))}
          </select>
          {errors.visaType && <span className="text-[10px] text-red-500 font-medium pl-1">{errors.visaType}</span>}
        </div>

        {/* Travel Date */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[#8A9BA8] font-bold text-[10px] tracking-wider uppercase font-sans">
            Travel Date
          </label>
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className={`w-full px-5 py-3.5 bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] focus:bg-white border rounded-[16px] text-sm text-[#1B365D] font-medium font-sans outline-none transition-all duration-200 ${
              errors.travelDate ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-[#EBE6E0] focus:border-[#E06A3B]'
            }`}
          />
          {errors.travelDate && <span className="text-[10px] text-red-500 font-medium pl-1">{errors.travelDate}</span>}
        </div>

        {/* Message / Travel Details */}
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label className="text-[#8A9BA8] font-bold text-[10px] tracking-wider uppercase font-sans">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Tell us about your travel plans..."
            className="w-full px-5 py-4 bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] focus:bg-white border border-[#EBE6E0] focus:border-[#E06A3B] rounded-[16px] text-sm text-[#1B365D] font-medium font-sans outline-none resize-none transition-all duration-200"
          />
        </div>
      </div>

      {/* Trust Signatures Row */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[#8A9BA8] text-[11px] font-semibold py-1 md:col-span-2">
        <span className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-[#3CD2C5]" /> 256-Bit SSL Encription
        </span>
        <span className="flex items-center gap-1.5">
          <UserCheck className="w-3.5 h-3.5 text-[#3CD2C5]" /> Authorized Agent
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#3CD2C5]" /> Instant Referral Check
        </span>
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#1B365D] hover:bg-[#0E4461] disabled:bg-[#1B365D]/50 text-white font-bold py-4 px-6 rounded-[16px] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer text-[15px]"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Validating Application...
          </>
        ) : (
          <>
            Start My Application
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
          </>
        )}
      </button>
    </form>
  );
}
