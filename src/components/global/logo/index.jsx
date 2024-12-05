import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/">
      <h1 className="lg:text-4xl xl:text-3xl md:text-2xl sm:text-xl text-xl font-bold font-outfit">
        Pokemon
      </h1>
    </Link>
  );
}

export default Logo;
