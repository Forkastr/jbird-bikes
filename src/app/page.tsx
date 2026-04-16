"use client";

import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wrench, 
  ShoppingCart, 
  Banknote, 
  MapPin, 
  Bike, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck
} from "lucide-react";

export default function HomePage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#FFD700] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-[#FFD700] pb-24">
      <main className="flex flex-col items-center justify-center px-6 py-12 text-center max-w-md mx-auto">
        
        {/* LOGO */}
        <div className="w-24 h-24 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white/20">
          <Bike size={48} className="text-[#FFD700]" />
        </div>

        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2 leading-none">
          JBird Bike Shop
        </h1>
        
        <p className="text-xl font-medium italic mb-10 opacity-90 leading-tight">
          ...the Place to Be <br />
          If You're Looking for...
        </p>

        <div className="space-y-6 w-full mb-12">
          
          {/* 1. SERVICE CARD */}
          <Card className="bg-white/95 border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 cursor-pointer" onClick={() => toggle('service')}>
                <Wrench className="mx-auto mb-3 text-[#1A1A1A]" size={32} />
                <h2 className="text-2xl font-bold mb-1">Service & Maintenance</h2>
                <p className="text-lg opacity-80 uppercase tracking-wide font-bold mb-2">Bicycles & eBikes</p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-60">
                  <span>Find Out More</span>
                  {expanded === 'service' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {expanded === 'service' && (
                <div className="px-6 pb-6 text-left border-t border-black/5 pt-4">
                   <p className="text-lg font-bold mb-4">We Repair & Maintain ALL Bicycles and eBikes. <br /><span className="text-green-700 uppercase">Free Diagnostic</span></p>
                   <div className="space-y-2 mb-4 text-lg">
                      <div className="flex justify-between border-b border-black/5 pb-1"><span>Single Repair</span><span className="font-black">$65 + parts</span></div>
                      <div className="flex justify-between border-b border-black/5 pb-1"><span>Flat</span><span className="font-black">$30 + parts</span></div>
                      <div className="flex justify-between border-b border-black/5 pb-1"><span>Full Tune-Up</span><span className="font-black">$95</span></div>
                   </div>
                   <Button className="w-full bg-[#1A1A1A] text-white font-bold uppercase py-6">Contact Us</Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 2. SALES CARD */}
          <Card className="bg-white/95 border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 cursor-pointer" onClick={() => toggle('sales')}>
                <ShoppingCart className="mx-auto mb-3 text-[#1A1A1A]" size={32} />
                <h2 className="text-2xl font-bold mb-1 leading-tight">Quality eBikes <br /> Affordable Prices</h2>
                <p className="text-lg font-semibold text-green-700 mb-2">Starting at $350</p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-60">
                  <span>Find Out More</span>
                  {expanded === 'sales' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {expanded === 'sales' && (
                <div className="px-6 pb-6 text-left border-t border-black/5 pt-4 text-lg font-bold">
                  <p className="mb-2">• New ebikes, Fully Assembled</p>
                  <p className="mb-2">• Our Exclusive JBird Build</p>
                  <p className="mb-4">• UL Listed</p>
                  <Button className="w-full bg-[#1A1A1A] text-white font-bold uppercase py-6">Contact Us</Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 3. ASSEMBLY CARD */}
          <Card className="bg-[#1A1A1A] text-white border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 cursor-pointer" onClick={() => toggle('assembly')}>
                <h2 className="text-xl font-bold mb-2 text-[#FFD700]">Buy an eBike Online?</h2>
                <p className="text-lg leading-tight mb-2">We Assemble & Build It <br /><span className="text-sm opacity-80 italic">So you don't have to.</span></p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#FFD700]">
                  <span>Find Out More</span>
                  {expanded === 'assembly' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {expanded === 'assembly' && (
                <div className="px-6 pb-6 text-left border-t border-white/10 pt-4">
                  <p className="text-lg font-bold mb-4 italic">Full Assembly with Extra Features: $135</p>
                  <Button className="w-full bg-[#FFD700] text-[#1A1A1A] font-bold uppercase py-6">Contact Us</Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 4. INCENTIVE CARD */}
          <Card className="bg-white/95 border-2 border-[#1A1A1A] shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 cursor-pointer" onClick={() => toggle('nola')}>
                <Banknote className="mx-auto mb-3 text-green-600" size={32} />
                <h2 className="text-xl font-bold">Get Up to $1,200 <br />To Buy Your eBike!</h2>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-60 mt-3">
                  <span>Find Out More</span>
                  {expanded === 'nola' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {expanded === 'nola' && (
                <div className="px-6 pb-6 text-left border-t border-black/5 pt-4 text-lg font-bold">
                  <p className="text-sm uppercase mb-2 opacity-60">Official Retailer:</p>
                  <p className="mb-4">NOLA eBike Incentive Program</p>
                  <ul className="space-y-2 mb-4">
                    <li>• Availability is Limited</li>
                    <li>• Register Now for the Program</li>
                    <li>• We Handle All the Paperwork</li>
                  </ul>
                  <Button className="w-full bg-[#1A1A1A] text-white font-bold uppercase py-6">Contact Us</Button>
                </div>
              )}
            </CardContent>
          </Card>

        </div>

        {/* 10-POINT GUARANTEE */}
        <div className="w-full mt-4">
          <Card className="bg-transparent border-2 border-[#1A1A1A]/10 shadow-none overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4 cursor-pointer" onClick={() => toggle('why')}>
                <h3 className="text-lg font-black uppercase tracking-widest">Why Choose JBird?</h3>
                {expanded === 'why' ? <ChevronUp className="mx-auto mt-1" size={14} /> : <ChevronDown className="mx-auto mt-1" size={14} />}
              </div>
              {expanded === 'why' && (
                <div className="px-6 pb-6 text-left border-t border-black/10 pt-4 text-lg font-bold">
                   <p className="text-md uppercase mb-4 text-center text-blue-700 underline decoration-2">Our 10-Point Quality Guarantee:</p>
                   <ul className="space-y-2 mb-6">
                    <li>• Full Safety Inspection</li>
                    <li>• Brake Calibration</li>
                    <li>• Drivetrain Tuning</li>
                    <li>• Battery Street Test</li>
                    <li>• Test Ride Verified</li>
                    <li>• and more...</li>
                   </ul>
                   <Button className="w-full bg-[#1A1A1A] text-white font-bold uppercase py-6">Contact Us</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* TEST RIDE */}
        <section className="w-full py-10 px-6 bg-white rounded-3xl shadow-xl text-center border-4 border-[#1A1A1A] mt-12">
          <h2 className="text-3xl font-black uppercase mb-2">Test-Ride <br /> Get $20</h2>
          <p className="text-sm font-bold opacity-70 mb-8 italic">Toward any service or accessory.</p>
          <div className="grid grid-cols-2 gap-4 mb-8 opacity-20">
            <div className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center"><Bike size={40} /></div>
            <div className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center"><Bike size={40} /></div>
          </div>
          <Button className="w-full py-8 text-2xl font-
