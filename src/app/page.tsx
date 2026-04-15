"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, ShoppingCart, Banknote, MapPin, Bike } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFD700] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-[#FFD700]">
      {/* SECTION 1: HERO & LOGO */}
      <main className="flex flex-col items-center justify-center px-6 py-12 text-center max-w-md mx-auto">
        
        {/* Placeholder for Logo */}
        <div className="w-24 h-24 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-6 shadow-xl">
          <Bike size={48} className="text-[#FFD700]" />
        </div>

        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">
          JBird Bike Shop
        </h1>
        
        <p className="text-xl font-medium italic mb-10 opacity-90">
          ...the Place to Be <br />
          If You're Looking for...
        </p>

        {/* FEATURE CARDS - Optimized for Phone Tapping */}
        <div className="space-y-6 w-full">
          
          {/* SALES CARD */}
          <Card className="bg-white/95 border-none shadow-lg transform active:scale-95 transition-transform">
            <CardContent className="p-6">
              <ShoppingCart className="mx-auto mb-3 text-[#1A1A1A]" size={32} />
              <h2 className="text-2xl font-bold mb-1">Quality eBikes at Affordable Prices</h2>
              <p className="text-lg font-semibold text-green-700 mb-2">Starting at $350</p>
              <Badge variant="secondary" className="bg-[#FFD700] text-[#1A1A1A] font-bold">
                Financing Available
              </Badge>
            </CardContent>
          </Card>

          {/* SERVICE CARD */}
          <Card className="bg-white/95 border-none shadow-lg transform active:scale-95 transition-transform">
            <CardContent className="p-6">
              <Wrench className="mx-auto mb-3 text-[#1A1A1A]" size={32} />
              <h2 className="text-2xl font-bold mb-1">Service & Maintenance</h2>
              <p className="text-lg opacity-80 uppercase tracking-wide font-bold">Bicycles & eBikes</p>
            </CardContent>
          </Card>

          {/* ASSEMBLY CARD */}
          <Card className="bg-[#1A1A1A] text-white border-none shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-2 text-[#FFD700]">Buy an eBike Online?</h2>
              <p className="mb-4">We Assemble & Build it for You</p>
              <div className="text-sm font-black uppercase tracking-widest bg-white/10 py-2 rounded">
                Ride with Peace of Mind
              </div>
            </CardContent>
          </Card>

          {/* INCENTIVE PROGRAM CARD */}
          <Card className="bg-white/95 border-2 border-[#1A1A1A] shadow-lg">
            <CardContent className="p-6">
              <Banknote className="mx-auto mb-3 text-green-600" size={32} />
              <h2 className="text-xl font-bold">Get Up to $1,200 to Buy an eBike</h2>
              <p className="text-sm font-bold my-2 opacity-70 italic">Official Retailer:</p>
              <p className="text-lg font-black uppercase tracking-tight">NOLA eBike Incentive Program</p>
            </CardContent>
          </Card>

        </div>

        {/* LOCATION FOOTER */}
        <footer className="mt-16 pb-8 flex flex-col items-center">
          <div className="flex items-center gap-2 font-bold text-lg mb-2">
            <MapPin size={24} />
            <span>2336 St. Louis Street</span>
          </div>
          <p className="text-sm font-black bg-[#1A1A1A] text-[#FFD700] px-4 py-1 rounded-full uppercase tracking-widest">
            Directly on the Lafitte Greenway
          </p>
        </footer>

      </main>
    </div>
  );
}
