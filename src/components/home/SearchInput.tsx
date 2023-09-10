import { TiLocation } from "react-icons/ti";
export default function SearchInput() {
  return (
    <div className="mt-5">
      <h2 className="text-center text-[20px] text-gray-400 my-3">
        Lets Search what you need
      </h2>
      <div className="flex justify-center">
        <div className="flex bg-gray-100 rounded-xl p-2 divide-x">
          <div className="text-gray-400 flex gap-2 items-center">
            <TiLocation size={25} color="black" />
            <input
              type="text"
              placeholder="Location"
              className="p-2 outline-none bg-transparent"
            />
          </div>
          <div>
            <input
              type="date"
              className="p-2 outline-none bg-transparent  text-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
