"use client";

import * as React from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Regular Player",
    content: "The best pickleball facility in Da Nang. The lighting is tournament-grade and the community is so welcoming!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Chen",
    role: "Pro Circuit",
    content: "I've played globally, and The Kitchen Club's surface quality is top-tier. Booking is seamless every time.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Marcus Tan",
    role: "Weekend Warrior",
    content: "Love the atmosphere here. The coaching staff helped me fix my dink game in just two sessions. Highly recommend!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    name: "Elena Rodriguez",
    role: "Club Member",
    content: "The glassmorphic design of the lounge area is just a bonus. The courts are where the real magic happens. 10/10.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
];

export function TestimonialsCarousel() {
  return (
    <section className="py-24 bg-forest relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-lime/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-lime font-semibold tracking-wider uppercase text-sm mb-3">Player Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Trusted by <span className="text-lime">500+</span> regular dinkers
          </h3>
        </div>

        <div className="px-12 md:px-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-1">
                    <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                      <CardContent className="p-8 flex flex-col h-full">
                        <div className="flex gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-lime text-lime group-hover:scale-110 transition-transform duration-300" />
                          ))}
                        </div>
                        
                        <div className="relative mb-8">
                          <Quote className="absolute -top-4 -left-4 w-8 h-8 text-white/5" />
                          <p className="text-slate-300 relative z-10 italic leading-relaxed">
                            "{testimonial.content}"
                          </p>
                        </div>

                        <div className="mt-auto flex items-center gap-4">
                          <Avatar className="h-12 w-12 border-2 border-lime/20 group-hover:border-lime/50 transition-colors">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-white font-bold text-sm">{testimonial.name}</p>
                            <p className="text-white/50 text-xs">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/5 border-white/10 text-white hover:bg-lime hover:text-forest" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/5 border-white/10 text-white hover:bg-lime hover:text-forest" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
