"use client";
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, ShoppingCart, Banknote, MapPin, Bike, ArrowRight, ChevronDown, ChevronUp, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (id: string) => setExpanded(expanded === id ? null : id);

  const ContactButton = () => (
    <Button className="w-full mt-6 bg-black text-white font-black uppercase tracking-widest text-sm py-6 hover:bg-gray-900 shadow-md">
      Contact Us <ArrowRight className="ml-2" size={16} />
    </Button>
  );

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pb-24">
      <main className="flex flex-col items-center justify-center px-6 py-12 text-center max-w-md mx-auto">
        <div className="mb-8 w-full flex justify-center px-2">
          <img src="/JBird Bikes Front.jpg" alt="JBird Bikes Front" className="w-full max-w-sm h-64 object-cover rounded-2xl shadow-2xl border-4 border-black/5" />
        </div>

        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2 leading-none">JBird Bikes</h1>
        <p className="text-xl font-medium italic mb-6 opacity-60 leading-tight">Sales & Service <br /> On the Lafitte Greenway</p>

        <a href="tel:5045216997" className="mb-10 inline-block bg-black text-white px-8 py-4 rounded-xl shadow-lg transform active:scale-95 transition-transform">
          <p className="text-xs font-black uppercase tracking-widest mb-1 opacity-70">Call / Text</p>
          <p className="text-2xl font-black">(504) 521-6997</p>
        </a>

        <div className="space-y-6 w-full mb-12">
          {[
            { id: 'service', icon: Wrench, title: 'Repairs & Maintenance', sub: 'Free Diagnostic', details: 'We Repair All Bicycles.' },
            { id: 'sales', icon: ShoppingCart, title: 'Quality eBikes', sub: 'Starting at $350', details: 'Financing Available.' }
          ].map((item) => (
            <Card key={item.id} className="bg-white border-2 border-black/5 shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 text-center cursor-pointer" onClick={() => toggle(item.id)}>
                  <item.icon className="mx-auto mb-3 opacity-80" size={32} />
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-1 text-black">{item.title}</h2>
                  <p className="text-lg font-bold text-black/60 mb-2">{item.sub}</p>
                  <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-40">
                    <span>{expanded === item.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
                  </div>
                </div>
                {expanded === item.id && (
                  <div className="px-6 pb-6 text-left border-t border-black/5 pt-6 bg-gray-50/50">
                    <p className="text-xl font-black mb-4">{item.details}</p>
                    <ContactButton />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="mt-16 pb-8 flex flex-col items-center opacity-40">
          <div className="flex items-center gap-2 font-black text-xl mb-2"><MapPin size={24} /> <span>2336 St. Louis Street</span></div>
          <p className="text-sm font-bold uppercase tracking-widest">Directly on the Lafitte Greenway</p>
        </footer>
      </main>
    </div>
  );
}
