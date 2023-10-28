import { ComicPopup } from "@/components/ComicPopup";
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
            router.push("/rooms/hall");
          }
        }}
        src={nextSlide ? "/frontporch.png" : "/hauntedhouseouter.png"}
        className="h-screen w-screen overflow-hidden absolute object-cover"
      />

      <div className="fixed bottom-5 right-5 w-full md:w-auto md:max-w-4xl">
        <ComicPopup
          text={
            !nextSlide
              ? "You see an eerie mansion in the distance. Hmm, what could it be? You decide to dig further. With every courageous step, you will unfurl the secrets of what's inside. You decide to enter the yard by clicking the house..."
              : "You approach the house, its mystifying powers captivate you, and you are tempted to open the door. However, what lies ahead? Spirits, monsters, the unfathomable? You decide to go in by clicking the door"
          }
        />
      </div>
    </div>
  );
}

export default Home;
