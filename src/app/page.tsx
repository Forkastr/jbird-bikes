"use client";

import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wrench, ShoppingCart, Banknote, MapPin, Bike, 
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp 
} from "lucide-react";

export default function HomePage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => setExpanded(expanded === id ? null : id);

  return (
    <div className="min-h-screen bg-[#FFD700] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-[#FFD700] pb-24">
      
      {/* SECTION 1: HERO & LOGO (Your existing content) */}
      <main className="flex flex-col items-center justify-center px-6 py-12 text-center max-w-md mx-auto">
        
        <div className="w-24 h-24 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white/20">
          <Bike size={48} className="text-[#FFD700]" />
        </div>

        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2 leading-none">
          JBird Bike Shop
        </h1>
        
        <p className="text-xl font-medium italic mb-10 opacity-90">
          ...the Place to Be <br />
          If You're Looking for...
        </p>

        {/* FEATURE CARDS */}
        <div className="space-y-6 w-full mb-16">
          {/* Sales, Service, Assembly, Incentive Cards go here (kept same as before) */}
          {/* ... */}
        </div>

        {/* SECTION 2: THE DEEP DIVE (Lead Generation Focus) */}
        <section className="w-full text-left space-y-4">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-6">
            Why Choose JBird?
          </h2>

          {/* 10-POINT OFFER ACCORDION */}
          <div 
            className="bg-[#1A1A1A] text-white rounded-2xl overflow-hidden shadow-lg transition-all"
            onClick={() => toggle('quality')}
          >
            <div className="p-5 flex justify-between items-center cursor-pointer">
              <span className="font-bold text-lg">Our 10-Point Quality Guarantee</span>
              {expanded === 'quality' ? <ChevronUp className="text-[#FFD700]" /> : <ChevronDown />}
            </div>
            
            {expanded === 'quality' && (
              <div className="px-5 pb-6 space-y-3 border-t border-white/10 pt-4">
                {[
                  "Full Safety Inspection",
                  "Brake Calibration",
                  "Drivetrain Tuning",
                  "Battery Stress Test",
                  "Software Updates Included",
                  "Test Ride Verified"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#FFD700]" />
                    <span className="text-sm opacity-90">{item}</span>
                  </div>
                ))}
                <Button className="w-full mt-4 bg-[#FFD700] text-[#1A1A1A] font-bold uppercase tracking-widest hover:bg-white">
                  Get a Custom Quote
                </Button>
              </div>
            )}
          </div>

          {/* SERVICE PRICING ACCORDION */}
          <div 
            className="bg-white/90 rounded-2xl overflow-hidden shadow-md transition-all"
            onClick={() => toggle('service')}
          >
            <div className="p-5 flex justify-between items-center cursor-pointer">
              <span className="font-bold text-lg">Service & Repair Rates</span>
              {expanded === 'service' ? <ChevronUp /> : <ChevronDown />}
            </div>
            
            {expanded === 'service' && (
              <div className="px-5 pb-6 space-y-4 border-t border-black/5 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Standard Tune-Up</span>
                  <span className="font-bold">$65</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">eBike Full Assembly</span>
                  <span className="font-bold">$135</span>
                </div>
                <p className="text-xs italic opacity-70">
                  *Flat rates for all major brands. Mobile service available.
                </p>
                <Button className="w-full bg-[#1A1A1A] text-white font-bold uppercase tracking-widest">
                  Book Your Service
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* FINAL CONVERSION BUTTON */}
        <div className="w-full pt-12">
          <Button 
            className="w-full py-10 text-2xl font-black uppercase tracking-widest bg-[#1A1A1A] text-[#FFD700] hover:bg-black shadow-2xl group active:scale-[0.98] transition-all border-4 border-white/20"
          >
            Contact Us Now
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Button>
          <p className="mt-4 text-xs font-bold opacity-60 uppercase tracking-widest">
            Fast Response • New Orleans Local
          </p>
        </div>

      </main>
    </div>
  );
}
