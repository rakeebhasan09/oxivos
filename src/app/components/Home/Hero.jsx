"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-20">
                <div>
                    <div className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                        Autumn / Winter 2026
                    </div>
                    <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
                        Quiet luxury,
                        <br />
                        <span className="italic text-muted-foreground">
                            worn slowly.
                        </span>
                    </h1>
                    <p className="mt-6 max-w-md text-base text-muted-foreground">
                        A curated wardrobe of essentials in wool, silk and
                        cashmere. Designed to be lived in — season after season.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                        >
                            Shop the collection
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="#featured"
                            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                        >
                            Discover
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-4/5 overflow-hidden rounded-lg bg-muted md:aspect-5/6">
                        <img
                            src="https://i.ibb.co.com/Q3RJt1VK/hero-image.jpg"
                            alt="Oxivos AW26 campaign"
                            width={1600}
                            height={1000}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-4 -left-4 hidden rounded-md bg-background px-4 py-3 shadow-lg md:block">
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">
                            Featured
                        </div>
                        <div className="text-sm font-medium">
                            The Ivory Suit
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
