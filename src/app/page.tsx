"use client";
import CarsFiltersOptions from "@/components/home/CarsFiltersOptions";
import Hero from "@/components/home/Hero";
import SearchInput from "@/components/home/SearchInput";
import { getCarList } from "../../services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState();
  useEffect(() => {
    carList();
  }, []);
  const carList = async () => {
    const result: any = await getCarList();
    setCarsList(result?.CarLists);
  };
  return (
    <div className="p-5 sm:px-8 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOptions />
    </div>
  );
}
