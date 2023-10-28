import { OuijaBoard } from "@/components/OuijaPopup";
import { useEffect, useState } from "react";
import useSound from "../../node_modules/use-sound";

const clamp = (val: number, min: number, max: number) =>
  Math.min(Math.max(val, min), max);

const Bedroom = () => {
  const [cutNoise] = useSound("/cutnoise.mp3");
  const [screamNoise] = useSound("/scream.mp3");
  const [mwahaha] = useSound("/mwahaha.mp3");
  const [startTimer, setStartTimer] = useState(false);
  // const [elapsed, setElapsed] = useState(0);

  const [showPuzzle, setShowPuzzle] = useState(false);

  const [startJumpscare, setStartJumpscare] = useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     if (startTimer) {
  //       setElapsed((previous) => previous + 1);
  //     }
  //   }, 1);
  // }, [elapsed, startTimer]);
  //   return <img src="/IMG_0025.png" className="w-screen h-screen bg-center" />;
  return (
    <div>
      <img
        src="/IMG_0025.png"
        className="w-full overflow-hidden z-[-20] object-cover h-full absolute"
      />

      {/* <a href="/room/library1"> */}
      <img
        onClick={async () => {
          // if (startTimer) {

          mwahaha();
          //   return;
          // }
          // await cutNoise();
          // setTimeout(async () => {
          //   await screamNoise();
          // }, 1000);
          // setTimeout(async () => {
          //   setStartTimer(true);
          // }, 2000);
        }}
        src="/scaryportrait.jpeg"
        style={{ transform: "rotateY(210deg)" }}
        className={`h-56 brightness-50 absolute z-99 left-[25vw] top-[15vh] ${
          startTimer ? "brightness-80" : "animate-pulse"
        }`}
      />

      <img
        onClick={() => {
          setShowPuzzle(true);
        }}
        src="/ouijaboard.jpeg"
        className="max-w-sm animate-pulse brightness-[50%] ml-[20vw] bottom-10 border-2 rounded-lg border-orange-800 absolute z-99"
      />

      {showPuzzle && (
        <div
          style={{
            zIndex: 999,
          }}
          className="p-4 md:p-8 flex justify-center items-center absolute w-screen h-screen bg-black bg-opacity-50"
        >
          <OuijaBoard />
        </div>
      )}
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

export default Bedroom;
