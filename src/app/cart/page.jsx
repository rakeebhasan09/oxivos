"use client";
import { CartContext } from "@/context/cartContext";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";

const CartPage = () => {
    const { items, updateQty } = useContext(CartContext);
    const count = items?.length || 0;
    // const shipping = subtotal > 150 || subtotal === 0 ? 0 : 12;
    // const total = subtotal + shipping;
    console.log(items);
    if (items?.length === 0) {
        return (
            <div className="mx-auto grid max-w-2xl place-items-center px-5 py-32 text-center md:px-8">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-muted">
                    <ShoppingBag className="h-8 w-8 text-muted-foreground" />
                </div>
                <h1 className="mt-6 font-serif text-4xl">Your bag is empty</h1>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                    Discover our latest arrivals and start building a wardrobe
                    that lasts.
                </p>
                <Link
                    href="/products"
                    className="mt-8 inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                    Shop the collection
                </Link>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
            <header className="mb-10 flex items-end justify-between">
                <div>
                    <div className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                        Your bag
                    </div>
                    <h1 className="mt-2 font-serif text-4xl md:text-5xl">
                        {count} {count === 1 ? "item" : "items"}
                    </h1>
                </div>
                <button className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">
                    Clear all
                </button>
            </header>
            <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
                <ul className="divide-y divide-border/60">
                    {items.map((item) => (
                        <li
                            key={`${item?.product._id}-${item?.size}-${item?.color}`}
                            className="grid grid-cols-[96px_1fr] gap-4 py-6 md:grid-cols-[120px_1fr_auto] md:gap-6"
                        >
                            <Link
                                href={`/products/${item?.product._id}`}
                                className="block aspect-4/5 overflow-hidden rounded-md bg-muted"
                            >
                                <img
                                    src={item?.product.image}
                                    alt={item?.product.name}
                                    className="h-full w-full object-cover"
                                />
                            </Link>

                            {/* Start Design From Here */}
                            <div className="min-w-0">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="min-w-0">
                                        <Link
                                            href={`/products/${item?.product._id}`}
                                            className="block truncate text-base font-medium hover:underline"
                                        >
                                            {item?.product.name}
                                        </Link>
                                        <div className="mt-1 text-xs text-muted-foreground">
                                            {item?.product.category} ·{" "}
                                            {item?.color} · {item?.size}
                                        </div>
                                    </div>
                                    <div className="text-sm font-medium md:hidden">
                                        ${item?.product.price * item?.quantity}
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center gap-4">
                                    <div className="flex items-center rounded-full border border-border">
                                        <button
                                            onClick={() =>
                                                updateQty(
                                                    item?.product._id,
                                                    item?.size,
                                                    item?.color,
                                                    item?.quantity - 1,
                                                )
                                            }
                                            aria-label="Decrease"
                                            className="grid h-9 w-9 place-items-center text-muted-foreground hover:text-foreground"
                                        >
                                            <Minus className="h-3.5 w-3.5" />
                                        </button>
                                        <span className="w-7 text-center text-sm">
                                            {item?.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                updateQty(
                                                    item?.product._id,
                                                    item?.size,
                                                    item?.color,
                                                    item?.quantity + 1,
                                                )
                                            }
                                            aria-label="Increase"
                                            className="grid h-9 w-9 place-items-center text-muted-foreground hover:text-foreground"
                                        >
                                            <Plus className="h-3.5 w-3.5" />
                                        </button>
                                    </div>

                                    {/* Next From Here */}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CartPage;
