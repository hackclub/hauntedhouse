import { OuijaBoard } from "@/components/OuijaPopup";
import { useEffect, useState } from "react";
import useSound from "../../node_modules/use-sound";

const clamp = (val: number, min: number, max: number) =>
  Math.min(Math.max(val, min), max);

const Closing = () => {
  <div>
    <h1 className="text-6xl font-fright">
      Thanks for attending Haunted House! Remember to push any final changes
    </h1>
  </div>;
};

export default Closing;
