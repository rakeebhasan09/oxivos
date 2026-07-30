"use client";
import { categories, products } from "@/data/products";
import React, { useMemo, useState } from "react";

const ProductsPage = () => {
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("featured");
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        let list = products.filter(
            (p) =>
                (category === "All" || p.category === category) &&
                (query.trim() === "" ||
                    p.name.toLowerCase().includes(query.toLowerCase())),
        );
        if (sort === "price-asc")
            list = [...list].sort((a, b) => a.price - b.price);
        if (sort === "price-desc")
            list = [...list].sort((a, b) => b.price - a.price);
        return list;
    }, [category, sort, query]);
    return (
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
            <header className="mb-8">
                <div className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    The Collection
                </div>
                <h1 className="mt-2 font-serif text-4xl md:text-5xl">
                    Shop all
                </h1>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                    {filtered.length}{" "}
                    {filtered.length === 1 ? "piece" : "pieces"} — hand-selected
                    for the season.
                </p>
            </header>

            <div className="mb-8 flex flex-col gap-4 border-y border-border/60 py-4 md:flex-row md:items-center md:justify-between">
                <div className="-mx-1 flex flex-wrap gap-1 overflow-x-auto">
                    {categories.map((c) => (
                        <button
                            key={c}
                            onClick={() => setCategory(c)}
                            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                                category === c
                                    ? "bg-foreground text-background"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search…"
                        className="h-9 w-full rounded-full border border-border bg-background px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground md:w-48"
                    />
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="h-9 rounded-full border border-border bg-background px-3 text-sm outline-none focus:border-foreground"
                    >
                        <option value="featured">Featured</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
