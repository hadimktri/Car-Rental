"use client";
import CarsFiltersOptions from "@/components/home/CarsFiltersOptions";
import Hero from "@/components/home/Hero";
import SearchInput from "@/components/home/SearchInput";
import { getCarList } from "../../services";
import { useEffect, useState } from "react";
import CarsList from "@/components/home/CarsList";

export default function Home() {
  const [carsList, setCarsList] = useState([]);
  useEffect(() => {
    carList();
  }, []);
  const carList = () => {
    getCarList().then((res) => setCarsList(res?.carLists));
  };

  return (
    <div className="p-5 sm:px-8 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOptions />
      <CarsList carsList={carsList} />
    </div>
  );
}
