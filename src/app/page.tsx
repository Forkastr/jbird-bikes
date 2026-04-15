"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, ShoppingCart, Banknote, MapPin, Bike, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFD700] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-[#FFD700] pb-24">
      {/* SECTION 1: HERO & LOGO */}
      <main className="flex flex-col items-center justify-center px-6 py-12 text-center max-w-md mx-auto">
        
        {/* Logo Placeholder */}
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
        <div className="space-y-6 w-full">
          
          {/* SALES CARD */}
          <Card className="bg-white/95 border-none shadow-lg transform active:scale-95 transition-transform">
            <CardContent className="p-6">
              <ShoppingCart className="mx-auto mb-3 text-[#1A1A1A]" size={32} />
              <h2 className="text-2xl font-bold mb-1 leading-tight">
                Quality eBikes <br /> Affordable Prices
              </h2>
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
              <p className="text-lg leading-tight">
                We Assemble & Build It <br /> 
                <span className="text-sm opacity-80 italic font-medium">So you don't have to.</span>
              </p>
              <div className="mt-4 text-xs font-black uppercase tracking-widest bg-white/10 py-2 rounded">
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
              <p className="text-lg font-black uppercase tracking-tight leading-none">
                NOLA EBIKE <br /> 
                <span className="text-2xl">INCENTIVE PROGRAM</span>
              </p>
            </CardContent>
          </Card>

        </div>

        {/* LOCATION INFO */}
        <div className="mt-12 mb-8 flex flex-col items-center">
          <div className="flex items-center gap-2 font-bold text-lg mb-2">
            <MapPin size={24} />
            <span>2336 St. Louis Street</span>
          </div>
          <p className="text-xs font-black bg-[#1A1A1A] text-[#FFD700] px-4 py-1 rounded-full uppercase tracking-widest">
            Directly on the Lafitte Greenway
          </p>
        </div>

        {/* SECTION CTA BUTTON */}
        <div className="w-full pt-4">
          <Button 
            className="w-full py-8 text-xl font-black uppercase tracking-widest bg-[#1A1A1A] text-white hover:bg-black shadow-2xl group active:scale-[0.98] transition-all"
            asChild
          >
            <a href="#more">
              Find Out More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

      </main>
    </div>
  );
}
