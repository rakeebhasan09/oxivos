import Category from "./components/Home/Category";
import Editorial from "./components/Home/Editorial";
import FeaturedProducts from "./components/Home/FeaturedProducts";
import Hero from "./components/Home/Hero";

export default function Home() {
    return (
        <>
            <Hero />
            <Category />
            <FeaturedProducts />
            <Editorial />
        </>
    );
}
