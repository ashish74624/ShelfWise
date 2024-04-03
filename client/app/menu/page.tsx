"use client";
import React from "react";
import { BackgroundBeams } from "@/Components/ui/background-beams";
import Menu from "@/Components/MenuGrid";

export default function BackgroundBeamsDemo() { 
  return (
    <div className=" h-screen w-screen overflow-y-scroll overflow-x-hidden dark  bg-neutral-950 relative antialiased pb-10">
      <h1 className="text-white text-3xl md:text-6xl flex justify-center z-50 my-5">Library Management System</h1>
      <Menu/>
    </div>
  );
}
