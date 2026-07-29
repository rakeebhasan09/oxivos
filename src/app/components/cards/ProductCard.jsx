import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
    return (
        <Link href={`/products/${product._id}`} className="group block">
            <div className="relative aspect-4/5 overflow-hidden rounded-md bg-muted">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.tag && (
                    <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-medium uppercase tracking-wider">
                        {product.tag}
                    </span>
                )}
                {!product.inStock && (
                    <span className="absolute right-3 top-3 rounded-full bg-foreground/90 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-background">
                        Sold out
                    </span>
                )}
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <div className="truncate text-sm font-medium">
                        {product.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                        {product.category}
                    </div>
                </div>
                <div className="shrink-0 text-sm font-medium">
                    ${product.price}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
