"use client";
import { CartContext } from "@/context/cartContext";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";

const CartPage = () => {
    const { cart } = useContext(CartContext);
    const count = cart?.length || 0;
    // const shipping = subtotal > 150 || subtotal === 0 ? 0 : 12;
    // const total = subtotal + shipping;

    if (cart?.length === 0) {
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
                    {cart.map((item) => (
                        <li
                            key={item._id}
                            className="grid grid-cols-[96px_1fr] gap-4 py-6 md:grid-cols-[120px_1fr_auto] md:gap-6"
                        >
                            <Link
                                href={`/products/${item._id}`}
                                className="block aspect-4/5 overflow-hidden rounded-md bg-muted"
                            >
                                <img
                                    src={item?.image}
                                    alt={item?.name}
                                    className="h-full w-full object-cover"
                                />
                            </Link>

                            {/* Start Design From Here */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CartPage;
