"use client";

import { CartContext } from "@/context/cartContext";
import { useContext, useMemo, useState } from "react";

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const value = useMemo(() => {
        const key = (item) => `${item.product._id}-${item.size}-${item.color}`;

        return {
            items: cart,

            add: (product, opts = {}) => {
                const size = opts.size ?? product.sizes[0];
                const color = opts.color ?? product.colors[0];
                const quantity = opts.quantity ?? 1;

                setCart((prev) => {
                    console.log("Previous:", prev);
                    const existing = prev.find(
                        (item) =>
                            item.product._id === product._id &&
                            item.size === size &&
                            item.color === color,
                    );

                    if (existing) {
                        return prev.map((item) =>
                            key(item) === key(existing)
                                ? {
                                      ...item,
                                      quantity: item.quantity + quantity,
                                  }
                                : item,
                        );
                    }

                    return [
                        ...prev,
                        {
                            product,
                            size,
                            color,
                            quantity,
                        },
                    ];
                });
            },

            remove: (id, size, color) => {
                setCart((prev) =>
                    prev.filter(
                        (item) =>
                            !(
                                item.product._id === id &&
                                item.size === size &&
                                item.color === color
                            ),
                    ),
                );
            },

            updateQty: (id, size, color, qty) => {
                setCart((prev) =>
                    prev
                        .map((item) =>
                            item.product._id === id &&
                            item.size === size &&
                            item.color === color
                                ? {
                                      ...item,
                                      quantity: Math.max(1, qty),
                                  }
                                : item,
                        )
                        .filter((item) => item.quantity > 0),
                );
            },

            clear: () => setCart([]),

            count: cart.reduce((total, item) => total + item.quantity, 0),

            subtotal: cart.reduce(
                (total, item) => total + item.quantity * item.product.price,
                0,
            ),
        };
    }, [cart]);

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}
