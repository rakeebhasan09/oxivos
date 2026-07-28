import React from "react";

const Editorial = () => {
    return (
        <section
            id="about"
            className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8"
        >
            <div className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Our promise
            </div>
            <p className="mt-6 font-serif text-2xl leading-relaxed md:text-3xl">
                Every piece is made in limited runs from responsibly sourced
                materials — the antidote to a wardrobe that never rests.
            </p>
        </section>
    );
};

export default Editorial;
