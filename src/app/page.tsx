"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Bike, ShieldCheck, MapPin, Star, ArrowRight, Play, CheckCircle2 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
          <div className="bg-primary text-primary-foreground p-1 rounded-lg">
            <Bike className="size-6" />
          </div>
          <span>JBird Bikes</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#bikes">Bikes</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">Services</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">About</a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-slate-50">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit mb-2 px-4 py-1">Now Open in New Orleans</Badge>
                  <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 pb-2">
                    Premium Electric Bikes & Expert Service
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl lg:text-lg xl:text-xl
