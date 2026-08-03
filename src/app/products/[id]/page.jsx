"use client";
import ProductCard from "@/app/components/cards/ProductCard";
import { CartContext } from "@/context/cartContext";
import { products } from "@/data/products";
import { Check, Minus, Plus, Star } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const params = useParams();
    const product = products.find((p) => p._id === Number(params.id));
    const [size, setSize] = useState(product?.sizes[0]);
    const [color, setColor] = useState(product?.colors[0]);
    const [qty, setQty] = useState(1);
    const { addToCart } = useContext(CartContext);

    const related = products
        .filter((p) => p.category === product.category && p._id !== product._id)
        .slice(0, 3);

    if (!product) {
        return (
            <div className="mx-auto max-w-2xl px-5 py-32 text-center">
                <h1 className="font-serif text-4xl">Not found</h1>
                <p className="mt-2 text-muted-foreground">
                    This piece has moved on.
                </p>
                <Link
                    href="/products"
                    className="mt-6 inline-block text-sm underline"
                >
                    Back to shop
                </Link>
            </div>
        );
    }

    return (
        <>
            <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
                <nav className="mb-6 text-xs text-muted-foreground">
                    <Link href="/" className="hover:text-foreground">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <Link href="/products" className="hover:text-foreground">
                        Shop
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-foreground">{product.name}</span>
                </nav>
                <div className="grid gap-10 md:grid-cols-2 md:gap-16">
                    <div className="overflow-hidden rounded-lg bg-muted">
                        <div className="aspect-4/5">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                            {product.category}
                        </div>
                        <h1 className="mt-2 font-serif text-4xl md:text-5xl">
                            {product.name}
                        </h1>
                        <div className="mt-4 flex items-center gap-4">
                            <div className="text-2xl">${product.price}</div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Star className="h-3.5 w-3.5 fill-current" />
                                {product.rating}
                            </div>
                            <div
                                className={`text-xs uppercase tracking-widest ${product.inStock ? "text-emerald-700" : "text-destructive"}`}
                            >
                                {product.inStock ? "In stock" : "Sold out"}
                            </div>
                        </div>
                        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                            {product.description}
                        </p>
                        <div className="mt-8">
                            <div className="mb-3 text-xs font-medium uppercase tracking-widest">
                                Color —{" "}
                                <span className="text-muted-foreground">
                                    {color}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {product.colors.map((c) => (
                                    <button
                                        key={c}
                                        onClick={() => setColor(c)}
                                        className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                                            color === c
                                                ? "border-foreground bg-foreground text-background"
                                                : "border-border hover:border-foreground"
                                        }`}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="mb-3 text-xs font-medium uppercase tracking-widest">
                                Size —{" "}
                                <span className="text-muted-foreground">
                                    {size}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => setSize(s)}
                                        className={`min-w-12 rounded-md border px-3 py-2 text-sm transition-colors ${
                                            size === s
                                                ? "border-foreground bg-foreground text-background"
                                                : "border-border hover:border-foreground"
                                        }`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 flex items-center gap-3">
                            <div className="flex items-center rounded-full border border-border">
                                <button
                                    onClick={() =>
                                        setQty((q) => Math.max(1, q - 1))
                                    }
                                    aria-label="Decrease"
                                    className="grid h-11 w-11 place-items-center text-muted-foreground hover:text-foreground"
                                >
                                    <Minus className="h-4 w-4" />
                                </button>
                                <span className="w-8 text-center text-sm">
                                    {qty}
                                </span>
                                <button
                                    onClick={() => setQty((q) => q + 1)}
                                    aria-label="Increase"
                                    className="grid h-11 w-11 place-items-center text-muted-foreground hover:text-foreground"
                                >
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>
                            <button
                                disabled={!product.inStock}
                                onClick={() => {
                                    addToCart(product, {
                                        size,
                                        color,
                                        quantity: qty,
                                    });
                                    Swal.fire({
                                        title: "Added to bag",
                                        text: `${product.name} · ${size} · ${color}`,
                                        icon: "success",
                                    });
                                }}
                                className="flex-1 rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:hover:translate-y-0"
                            >
                                {product.inStock ? "Add to bag" : "Sold out"}
                            </button>
                        </div>
                        <ul className="mt-10 space-y-2 border-t border-border/60 pt-6 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <Check className="h-4 w-4" /> Complimentary
                                shipping over $150
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="h-4 w-4" /> 30-day considered
                                returns
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="h-4 w-4" /> Made in limited
                                runs
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {related.length > 0 && (
                <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
                    <h2 className="mb-8 font-serif text-2xl md:text-3xl">
                        You may also like
                    </h2>
                    <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
                        {related.map((p) => (
                            <ProductCard key={p._id} product={p} />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};

export default ProductDetails;
