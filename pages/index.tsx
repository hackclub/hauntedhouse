import FilterButton from "@/components/FilterButton";
import Nav from "@/components/Nav";
import Rooms from "@/components/Rooms";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Home() {
  // const [selectedRoom, setSelectedRoom] = useState("Haunted House");

  // const handleFilterChange = (newFilter: string) => {
  //   setSelectedRoom(newFilter);
  // };

  const [nextSlide, setNextSlide] = useState(false);
  const router = useRouter();

  return (
    <div>
      {/* <Nav />
      <FilterButton onFilterChange={handleFilterChange} />
      <Rooms selectedRoom={selectedRoom} /> */}

      <img
        onClick={() => {
          if (!nextSlide) {
            setNextSlide(true);
          } else {
            router.push("/room/bedroom");
          }
        }}
        src={nextSlide ? "/frontporch.jpeg" : "/scoobydoo.webp"}
        className="h-screen w-screen overflow-hidden absolute object-cover"
      />
    </div>
  );
}

export default Home;
