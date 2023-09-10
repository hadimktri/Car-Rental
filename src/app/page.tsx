"use client";

import CarsFiltersOptions from "@/components/home/CarsFiltersOptions";
import Hero from "@/components/home/Hero";
import SearchInput from "@/components/home/SearchInput";
import { getCarsList } from "../../services";
import { useEffect, useState } from "react";
import CarsList from "@/components/home/CarsList";

export default function Home() {
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  const [carsList, setCarsList] = useState<any>([]);

  useEffect(() => {
    getAllCars();
  }, []);

  const getAllCars = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists);
    setCarsOrgList(result?.carLists);
  };

  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter(
      (item: any) => item.carBrand === brand
    );
    setCarsList(filterList);
  };

  const orderCarList = (order: number) => {
    const sortedData = [...carsOrgList].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedData);
  };

  return (
    <div className="p-5 sm:px-8 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOptions
        carsList={carsOrgList}
        orderCarList={(value: number) => orderCarList(value)}
        setBrand={(value: string) => filterCarList(value)}
        reset={() => setCarsList(carsOrgList)}
      />
      <CarsList carsList={carsList} />
    </div>
  );
}
