"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
    const fullYear = new Date().getFullYear();
    return (
        <div className="mt-24 border-t border-border/60 bg-muted/40">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
                <div className="md:col-span-2">
                    <div className="text-2xl font-serif">oxivos.</div>
                    <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                        Considered wardrobes for the modern minimalist. Made
                        slowly, worn always.
                    </p>
                </div>
                <div>
                    <div className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        Shop
                    </div>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href="/products"
                                className="hover:text-foreground text-muted-foreground"
                            >
                                All
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products"
                                className="hover:text-foreground text-muted-foreground"
                            >
                                New Arrivals
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products"
                                className="hover:text-foreground text-muted-foreground"
                            >
                                Bestsellers
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        Company
                    </div>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href="/about"
                                className="hover:text-foreground text-muted-foreground"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="hover:text-foreground text-muted-foreground"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/journal"
                                className="hover:text-foreground text-muted-foreground"
                            >
                                Journal
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
                © {fullYear} Oxivos. All rights reserved | Developed by{" "}
                <Link
                    href="https://mern.rakeebhasan.com"
                    className="hover:text-foreground text-muted-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Rakeeb Hasan
                </Link>
            </div>
        </div>
    );
};

export default Footer;
