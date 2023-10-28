import { useEffect, useState } from "react";
import useSound from "use-sound";

const clamp = (val: number, min: number, max: number) =>
  Math.min(Math.max(val, min), max);

const Bedroom = () => {
  const [cutNoise] = useSound("/cutnoise.mp3");
  const [screamNoise] = useSound("/scream.mp3");
  const [startTimer, setStartTimer] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    setInterval(() => {
      if (startTimer) {
        setElapsed((previous) => previous + 1);
      }
    }, 1);
  }, [elapsed, startTimer]);
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
          await cutNoise();

          setTimeout(async () => {
            await screamNoise();
          }, 1000);

          setTimeout(async () => {
            setStartTimer(true);
          }, 2000);
        }}
        src="/scaryportrait.jpeg"
        className="h-56 brightness-50 absolute z-99 left-[50%] top-[20%] animate-pulse"
      />

      <img
        src="/severedhead.png"
        style={{
          top: `${clamp(-20 + elapsed / 500, -20, 80)}vh`,
        }}
        className={`left-1/2 w-36 h-36 brightness-50 rotate-180  transition duration-100 absolute ${
          clamp(-20 + elapsed / 500, -20, 80) === 80 ? "rotate-[225deg]" : ""
        } `}
      />

      {/* </a> */}
      {/* <p className="text-white absolute z-99">
        {-5 * Math.pow((new Date() - elapsed) / 1000, 2)}
      </p> */}
    </div>
  );
};

export default Bedroom;
