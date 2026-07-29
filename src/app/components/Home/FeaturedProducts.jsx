"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProductCard from "../cards/ProductCard";
import { products } from "@/data/products";

const FeaturedProducts = () => {
    const featured = products.slice(0, 6);
    return (
        <section
            id="featured"
            className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"
        >
            <div className="mb-10 flex items-end justify-between">
                <div>
                    <div className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                        Featured
                    </div>
                    <h2 className="mt-2 font-serif text-3xl md:text-4xl">
                        New this season
                    </h2>
                </div>
                <Link
                    href="/products"
                    className="hidden items-center gap-1 text-sm font-medium hover:underline md:inline-flex"
                >
                    View all <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-3">
                {featured.map((p) => (
                    <ProductCard key={p._id} product={p} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
