import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                Welcome to My App
            </h1>
            <marquee>Today is vacation day two</marquee>
        </div>
    );
}
