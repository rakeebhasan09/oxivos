"use client";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@base-ui/react";
import {
    Search,
    SearchIcon,
    ShoppingBag,
    TextAlignJustify,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
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
        <>
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
                        onClick={() => setOpen(true)}
                        className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        data-tsd-source="/src/components/site-layout.tsx:26:13"
                    >
                        <Search size={16} />
                    </button>
                    <Link
                        aria-label="Cart"
                        data-tsd-source="/src/components/site-layout.tsx:29:13"
                        href="/cart"
                        className="relative grid h-9 w-9 place-items-center rounded-full text-foreground transition-colors hover:bg-muted"
                    >
                        <ShoppingBag size={16} />
                    </Link>
                    <div className="md:*:hidden cursor-pointer">
                        <TextAlignJustify onClick={() => setOpenDrawer(true)} />
                    </div>
                </div>
            </div>
            {/* Search Modal */}
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent>
                    <ButtonGroup className="flex items-center gap-2 w-full">
                        <Input
                            className="flex-3 border border-input bg-background placeholder:text-muted-foreground outline-0 px-2 py-2"
                            placeholder="Search..."
                        />
                    </ButtonGroup>
                    <Button
                        onClick={() => {
                            // এখানে search logic
                            setOpen(false); // Modal বন্ধ হবে
                        }}
                        className="flex-1 px-4! py-4!"
                        variant="outline"
                        aria-label="Search"
                    >
                        Search
                    </Button>
                </AlertDialogContent>
            </AlertDialog>

            {/* Mobile Menu */}
            <Drawer
                open={openDrawer}
                onOpenChange={setOpenDrawer}
                swipeDirection="left"
            >
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Menu</DrawerTitle>
                    </DrawerHeader>
                    <div className="flex-1 p-4">
                        <div className="size-full">
                            <ul className="flex flex-col gap-4">{navLinks}</ul>
                        </div>
                    </div>
                    <DrawerFooter>
                        <DrawerClose render={<Button>Close</Button>} />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Navbar;
