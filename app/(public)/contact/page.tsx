'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, 
  MessageSquare, Clock, ShieldCheck 
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sport: 'Marathon & Running',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            Direct Communication Channels
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            SPEAK WITH OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">STAFF</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base">
            Have questions regarding lab testing, membership subscriptions, or personalized multi-sport coaching? Reach out directly.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Information Cards */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-6">
              <h3 className="font-bold text-white text-lg">Facility & Lab Location</h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">MetaEndure Performance Arena</strong>
                    <span className="text-zinc-400 leading-relaxed">
                      104, TTK Road, Alwarpet, Chennai, Tamil Nadu - 600018
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Direct Phone & WhatsApp</strong>
                    <span className="text-zinc-400 font-mono">+91 98400 78234 / +91 44 4200 9012</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Official Inquiries</strong>
                    <span className="text-zinc-400 font-mono">performance@metaendurelabs.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Operating Hours</strong>
                    <span className="text-zinc-400">
                      Mon – Sat: 05:30 AM – 08:30 PM<br />
                      Sunday: 05:00 AM – 11:30 AM (Cohort LSRs)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white">Rapid Response Guarantee</div>
                <div className="text-zinc-400">All coaching queries answered within 4 working hours.</div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                    Thank you, {formData.name}. Coach Sunil Menon or the intake coordinator will contact you at {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-2">Send an Athlete Inquiry</h3>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Senthil Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="senthil@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1">WhatsApp Mobile *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98400 55667"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Primary Discipline / Focus</label>
                    <select
                      value={formData.sport}
                      onChange={(e) => setFormData({...formData, sport: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="Marathon & Running">Marathon & Endurance Running</option>
                      <option value="Triathlon (70.3 / 140.6)">Triathlon (70.3 / 140.6)</option>
                      <option value="HYROX Simulation">HYROX Race Simulation</option>
                      <option value="Lactate Testing">Lactate & Metabolic Cart Testing</option>
                      <option value="Sports Physiotherapy">Sports Physiotherapy & Rehab</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Target Goals or Questions</label>
                    <textarea
                      rows={4}
                      placeholder="Share your current PB, target race date, or specific injury history..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
