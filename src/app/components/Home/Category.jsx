"use client";
import Link from "next/link";
import React from "react";

const Category = () => {
    return (
        <section className="border-y border-border/60 bg-muted/30">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 sm:grid-cols-3 md:grid-cols-6 md:px-8">
                {[
                    "Outerwear",
                    "Knitwear",
                    "Dresses",
                    "Bottoms",
                    "Accessories",
                    "Footwear",
                ].map((c) => (
                    <Link
                        key={c}
                        href="/products"
                        className="text-center text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                    >
                        {c}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Category;
