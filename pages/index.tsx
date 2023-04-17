import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Member from "@/components/Member";
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
      <Member />
      <JoinUs />
      <Footer />
    </div>
  );
}
