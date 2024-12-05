import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ name, types, image, onCardClick }) {
  return (
    <Link href={`/pokemon/${name}`} onClick={onCardClick}>
      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-500 flex items-center  justify-between space-x-2 border-b">
        <div className="flex items-center gap-2">
          <Image src={image} width={20} height={20} alt={name} />
          <span>{name}</span>
        </div>
        <p className="text-sm space-x-2">
          {types?.[0] && (
            <span
              key={types[0]}
              className="bg-gray-500 text-white rounded-md text-xs p-1 capitalize"
            >
              {types[0]}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}

export default Card;
