import Image from "next/image";
import Link from "next/link";
import React from "react";

function PokemonCard({ name, image, types }) {
  return (
    <Link href={`/pokemon/${name}`}>
      <div className="shadow-lg hover:shadow-2xl border border-gray-200 rounded-lg overflow-hidden">
        <div className="flex items-center justify-center pt-4">
          <Image
            src={image}
            alt={name}
            width={200}
            height={100}
            className="rounded-lg group-hover:opacity-90 w-[100px] h-[100px] object-cover"
          />
        </div>

        <div className="text-center p-2 space-y-2">
          <p className="text-lg font-bold font-outfit capitalize">{name}</p>
          <p className="text-sm space-x-2">
            {types?.map((type) => (
              <span
                key={type}
                className="bg-slate-600 rounded-md p-1 capitalize"
              >
                {type}
              </span>
            ))}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PokemonCard;
