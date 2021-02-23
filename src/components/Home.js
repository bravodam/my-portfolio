import React from "react";
import image from "../food-1.jpg";

export default function Home() {
    return (
        <main>
            <img src={ image} alt="food" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-3xl text-red-800 font-bold cursive leading-none lg:leading-snug home-name">Hello. I'm Ebenezer and I'm a software Developer.</h1>
            </section>
        </main>
    )
}