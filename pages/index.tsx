import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Package from "@/components/Package";
import Service from "@/components/Service";
import React from "react";

export default function index() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Service />
      <Package />
    </div>
  );
}
