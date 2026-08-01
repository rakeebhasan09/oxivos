"use client";
import { products } from "@/data/products";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const ProductDetails = () => {
    const params = useParams();
    const product = products.find((p) => p._id === Number(params.id));
    const [size, setSize] = useState(product.sizes[0]);
    const [color, setColor] = useState(product.colors[0]);
    const [qty, setQty] = useState(1);

    return (
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
        </div>
    );
};

export default ProductDetails;
