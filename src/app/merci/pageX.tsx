"use client";

import MerciScene from "@/components/MerciScene";
import {Navbar} from '@/components/Navbar';

export default function MerciPage() {
  return (
    <div className="relative w-full h-screen bg-black">
      <Navbar />
      <MerciScene />
    </div>
  );
}
