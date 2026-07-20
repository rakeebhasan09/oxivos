"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    const navLinks = (
        <>
            <li>
                <Link
                    className="transition-colors hover:text-foreground text-foreground"
                    href="/"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    className="transition-colors hover:text-foreground text-muted-foreground"
                    href="/products"
                >
                    Shop
                </Link>
            </li>
            <li>
                <Link
                    href="#journal"
                    className="text-muted-foreground hover:text-foreground"
                >
                    Journal
                </Link>
            </li>
            <li>
                <Link
                    href="#about"
                    className="text-muted-foreground hover:text-foreground"
                >
                    About
                </Link>
            </li>
        </>
    );
    return (
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8 ">
            <Link href="/">
                <span className="font-semibold">oxivos.</span>
            </Link>
            <nav className="hidden items-center text-sm md:flex">
                <ul className="gap-8 flex items-center">{navLinks}</ul>
            </nav>
            {/* Right Side */}
            <div
                className="flex items-center gap-1"
                data-tsd-source="/src/components/site-layout.tsx:25:11"
            >
                <button
                    aria-label="Search"
                    className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    data-tsd-source="/src/components/site-layout.tsx:26:13"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-search h-4 w-4"
                        aria-hidden="true"
                        data-tsd-source="/src/components/site-layout.tsx:27:15"
                    >
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                </button>
                <a
                    aria-label="Cart"
                    data-tsd-source="/src/components/site-layout.tsx:29:13"
                    href="/cart"
                    className="relative grid h-9 w-9 place-items-center rounded-full text-foreground transition-colors hover:bg-muted"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-shopping-bag h-4 w-4"
                        aria-hidden="true"
                        data-tsd-source="/src/components/site-layout.tsx:34:15"
                    >
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                        <path d="M3.103 6.034h17.794"></path>
                        <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
