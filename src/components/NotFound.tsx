"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { site } from "../config/site";
import type { ChromeProps } from "../lib/content";

const copy = site.notFound;

export default function NotFound({ chrome }: { chrome: ChromeProps }) {
  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col">
      <Navbar {...chrome.nav} />
      <div className="flex-1 flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-md text-center space-y-4">
          <p className="text-[120px] text-[#d3e97a] leading-none">404</p>
          <h1 className="font-['Inter',sans-serif] text-[24px] font-semibold text-white">{copy.heading}</h1>
          <p className="font-['Inter',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.6]">{copy.message}</p>
          <Link
            href="/"
            className="inline-block mt-4 bg-[#d3e97a] text-neutral-950 font-['Inter',sans-serif] font-bold text-[14px] uppercase tracking-wide px-8 py-3.5 rounded-full hover:bg-[#c5db6c] transition-colors"
          >
            {copy.buttonLabel}
          </Link>
        </div>
      </div>
      <Footer {...chrome.footer} />
    </div>
  );
}
