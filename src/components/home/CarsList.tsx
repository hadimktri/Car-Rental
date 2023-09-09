"use client";

import CarCard from "./CarCard";

export default function CarsList({ carsList }: any) {
  console.log(carsList);
  return (
    <div
      className="grid grid-cols-2 
    md:grid-cols-3
    lg:grid-cols-4"
    >
      {carsList.map((car: any, idx: number) => (
        <div key={idx}>
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
}
