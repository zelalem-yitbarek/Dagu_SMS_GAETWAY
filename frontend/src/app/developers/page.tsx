"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

import Navbar from "@/components/APINavBar";
import Footer from "@/components/footer";

import Boa from "../../../public/CBE Logo.png";
import telebirr from "../../../public/Telebir.png";
import cbebirr from "../../../public/CBE_bIRR.png";
import mpesa from "../../../public/mpesa.png";

export default function PaymentPage() {
  const [selectedPayment, setSelectedPayment] = useState("");

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Your page content goes here */}
      </main>

      <Footer />
    </>
  );
}