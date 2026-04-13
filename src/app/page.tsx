"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bike, ShieldCheck, MapPin, Star, ArrowRight, Play } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
          <div className="bg-primary text-primary-foreground p-1 rounded-lg">
            <Bike className="size-6" />
          </div>
          <span>JBird Bikes</span>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-slate-50 text-center">
          <div className="container px-4 md:px-6">
            <Badge variant="secondary" className="mb-4">Now Open in New Orleans</Badge>
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl mb-4">Premium Electric Bikes</h1>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl mb-8">
              Experience the future of urban mobility. Expert service and the best e-bikes in NOLA.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Explore Inventory</Button>
              <Button size="lg" variant="outline">Book Service</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 border-t text-center text-sm text-gray-500">
        <p>© 2026 JBird Bikes. All rights reserved.</p>
      </footer>
    </div>
  );
}
