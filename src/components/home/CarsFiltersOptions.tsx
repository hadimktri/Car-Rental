"use client";

import React, { useEffect, useState } from "react";

function CarsFiltersOption({ carsList, setBrand, orderCarList, reset }: any) {
  const [brandList, setBrandList] = useState<any>();
  const BrandSet = new Set();

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    carsList.map((element: any) => {
      BrandSet.add(element.carBrand);
    });
    setBrandList(Array.from(BrandSet));
  };
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore our cars you might likes</h2>
      </div>
      <div className="flex gap-5">
        <select
          className="select select-bordered 
            w-fit max-w-xs"
          onChange={(e) => orderCarList(e.target.value)}
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Price
          </option>
          <option value={-1}>Lowest first</option>
          <option value={1}>Highest first</option>
        </select>
        <select
          className="select 
            select-bordered w-fit md:block max-w-xs hidden"
          onChange={(e) => setBrand(e.target.value)}
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Bands
          </option>
          {brandList &&
            brandList.map((brand: string, index: number) => (
              <option key={index}>{brand}</option>
            ))}
        </select>
        <button
          className="p-2 text-white px-4 rounded-lg
           hover:scale-110 hover:bg-slate-800 transition-all"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CarsFiltersOption;
