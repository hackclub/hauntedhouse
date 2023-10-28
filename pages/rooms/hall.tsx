import { ComicPopup } from "@/components/ComicPopup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import useSound from "use-sound";

const clamp = (val: number, min: number, max: number) =>
  Math.min(Math.max(val, min), max);

const Hall = () => {
  const router = useRouter();
  const [text, setText] = useState(
    "You come across a hall—one with three doors. Each door leads to something else, one to the bedroom, one to the kitchen, one to the library. Which do you choose?"
  ); //   return <img src="/IMG_0025.png" className="w-screen h-screen bg-center" />;
  return (
    <div>
      <img
        src="/3doors.png"
        className="w-full overflow-hidden z-[-20] object-cover h-full absolute object-center"
      />

      <div className="w-full h-screen flex gap-[2vw]">
        <div
          onClick={() => {
            router.push("/rooms/bedroom");
          }}
          className="h-full w-full bg-gray-100 bg-opacity-20 animate-pulse transition delay-100"
        ></div>

        <div
          onClick={() => {
            setText(
              "Uh oh! This room leads to the abyss. Do you want to fill this void? Create it if you dare..."
            );
            // router.push("/rooms/kitchen");
          }}
          className="h-full w-full bg-gray-100 bg-opacity-20 animate-pulse"
        >
          {/* <p className="">Bedroom</p> */}
        </div>
        <div
          onClick={() => {
            // router.push("/rooms/bedroom");
            setText(
              "Uh oh! This room leads to the abyss. Do you want to fill this void? Create it if you dare..."
            );
          }}
          className="h-full w-full bg-gray-100 bg-opacity-20 animate-pulse"
        ></div>
      </div>

      <div className="fixed bottom-5 right-5 w-full md:max-w-4xl md:w-autox">
        <ComicPopup text={text} />
      </div>

      {/* <a href="/room/library1"> */}

      {/* <img
        onClick={() => {
          setTimeout(() => {
            setStartJumpscare(true);
          }, 1500);
        }}
        src="/severedhead.png"
        style={{
          top: `${clamp(-20 + elapsed / 500, -20, 80)}vh`,
        }}
        className={`${
          startTimer ? "animate-pulse" : ""
        } left-1/2 w-36 h-36 brightness-50 rotate-180  transition duration-100 absolute ${
          clamp(-20 + elapsed / 500, -20, 80) === 80 ? "rotate-[225deg]" : ""
        } `}
      /> */}

      {/* </a> */}
      {/* <p className="text-white absolute z-99">
        {-5 * Math.pow((new Date() - elapsed) / 1000, 2)}
      </p> */}
    </div>
  );
};

export default Hall;
