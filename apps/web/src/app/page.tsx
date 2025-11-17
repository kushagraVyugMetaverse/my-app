// apps/web/src/app/page.tsx
import React from "react";
import Hero from "../components/Hero";

export const metadata = {
  title: "CreddX",
  description: "The Future of Crypto Trading",
};

export default function Page() {
  return (
    <main>
      <Hero />
    </main>
  );
}
