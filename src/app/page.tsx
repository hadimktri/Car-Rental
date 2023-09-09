import Hero from "@/components/home/Hero";
import SearchInput from "@/components/home/SearchInput";

export default function Home() {
  return (
    <div className="p-5 sm:px-8 md:px-20">
      <Hero/>
      <SearchInput/>
    </div>
  );
}
