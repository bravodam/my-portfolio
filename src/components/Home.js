import React from "react";
import image from "../food-1.jpg";

export default function Home() {
    return (
        <main>
            <img src={ image} alt="food" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-blue-700 font-bold leading-none lg:leading-snug home-name">Hi. I'm Ebenezer and I'm a software Developer.</h1>
            </section>
        </main>
    )
}