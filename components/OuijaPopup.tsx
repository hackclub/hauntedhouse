import { useRouter } from "next/router";
import { useState } from "react";
import { FaRegHandPointDown, FaRegHandPointUp } from "react-icons/fa6";

export const OuijaBoard = () => {
  const [expected] = useState([
    Math.floor(Math.random() * 3),
    Math.floor(Math.random() * 3),
    Math.floor(Math.random() * 3),
  ]);

  const pictures = [
    "/icons/catresized.png",
    "/icons/witchresized.png",
    "/icons/houseresized.png",
  ];

  const router = useRouter();
  const [values, setValues] = useState([0, 0, 0]);

  return (
    <div className="bg-beige text-black rounded-lg max-w-4xl p-3 md:p-8 font-fright">
      <h2 className="md:text-3xl text-xl  mb-4">
        Choose the right combination, and you shall pass
      </h2>

      <div className="mb-2 border border-black h-6">
        <div
          className="h-full bg-orange-900 transition"
          style={{
            width: `${
              ((2 -
                Math.abs(values[0] - expected[0]) +
                2 -
                Math.abs(values[1] - expected[1]) +
                2 -
                Math.abs(values[2] - expected[2])) /
                3 /
                2) *
              100
            }%`,
          }}
        ></div>
      </div>

      {JSON.stringify(values) !== JSON.stringify(expected) ? (
        <div
          style={{
            gridAutoRows: "1fr",
          }}
          className="flex w-full justify-center mx-auto grid-cols-1 md:grid-cols-3 gap-4 items-stretch"
        >
          <div className="h-full">
            <button
              className="w-full py-3 border-b border-gray-700"
              onClick={() => {
                let valuesClone = [...values];

                if (valuesClone[0] + 1 > 2) {
                  valuesClone[0] = 0;
                } else {
                  valuesClone[0]++;
                }

                setValues(valuesClone);
              }}
            >
              <FaRegHandPointUp className="w-full mx-auto" size={30} />
            </button>

            <img src={pictures[values[0]]} className="w-full py-6 h-[20vh]" />

            <button
              className="border-t border-gray-700 w-full py-3"
              onClick={() => {
                let valuesClone = [...values];

                if (valuesClone[0] - 1 < 0) {
                  valuesClone[0] = 2;
                } else {
                  valuesClone[0]--;
                }

                setValues(valuesClone);
              }}
            >
              <FaRegHandPointDown className="w-full mx-auto" size={30} />
            </button>
          </div>

          <div className="h-full">
            <button
              className="w-full py-3 border-b border-gray-700"
              onClick={() => {
                let valuesClone = [...values];

                if (valuesClone[1] + 1 > 2) {
                  valuesClone[1] = 0;
                } else {
                  valuesClone[1]++;
                }

                setValues(valuesClone);
              }}
            >
              <FaRegHandPointUp className="w-full mx-auto" size={30} />
            </button>

            <img src={pictures[values[1]]} className="w-full py-6 h-[20vh]" />

            <button
              className="border-t border-gray-700 w-full py-3"
              onClick={() => {
                let valuesClone = [...values];

                if (valuesClone[1] - 1 < 0) {
                  valuesClone[1] = 2;
                } else {
                  valuesClone[1]--;
                }

                setValues(valuesClone);
              }}
            >
              <FaRegHandPointDown className="w-full mx-auto" size={30} />
            </button>
          </div>
          <div className="h-min">
            <button
              className="w-full py-3 border-b border-gray-700"
              onClick={() => {
                let valuesClone = [...values];

                if (valuesClone[2] + 1 > 2) {
                  valuesClone[2] = 0;
                } else {
                  valuesClone[2]++;
                }

                setValues(valuesClone);
              }}
            >
              <FaRegHandPointUp className="w-full mx-auto" size={30} />
            </button>

            <img src={pictures[values[2]]} className="  w-full py-6 h-[20vh]" />

            <button
              className="border-t border-gray-700 w-full py-3"
              onClick={() => {
                let valuesClone = [...values];

                if (valuesClone[2] - 1 < 0) {
                  valuesClone[2] = 2;
                } else {
                  valuesClone[2]--;
                }

                setValues(valuesClone);
              }}
            >
              <FaRegHandPointDown className="w-full mx-auto" size={30} />
            </button>
          </div>

          {/* {expected.toString()} */}
        </div>
      ) : (
        <div>
          <audio autoPlay>
            <source src="/cutnoise.mp3" type="audio/mp3" />
            {/* <source src="/scream.mp3" type="audio/mp3" /> */}
          </audio>
          <p className="px-4 py-4 md:px-8 text-center font-fright text-lg tracking-wide">
            In ages past, I suffered a grievous betrayal at the hands of a
            once-trusted companion, who callously severed my very head. Now, I
            am the avenging specter known as the Headless Horseman. With a
            burning desire for retribution coursing through my spectral veins, I
            ride forth on a nightmarish steed, haunting the forlorn grounds near
            the accursed Haunted House. Beware, for if you cross my path in the
            shadowed vicinity of that wretched abode, you may bear witness to
            the relentless pursuit of justice. The air grows icy with
            foreboding, and the sound of phantom hooves echoes through the
            chilling night. This is not a mere tale of vengeance, but a legend
            woven into the very fabric of the haunted land, a testament to the
            enduring power of a soul denied rest until justice is served.
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => {
                router.push(`/rooms/hall`);
              }}
              className="rounded-md bg-orange-500 text-white px-6 py-2 mx-auto"
            >
              Proceed to next room
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
