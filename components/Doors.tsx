import React, { useEffect, useRef } from "react";

function openDoor(leftDoor: HTMLElement, rightDoor: HTMLElement) {
  leftDoor.style.width = "0";
  rightDoor.style.width = "0";
}

function openDoor2(leftDoor: HTMLElement, rightDoor: HTMLElement) {
  leftDoor.style.width = "30%";
  rightDoor.style.width = "50%";
}

const Doors = () => {
  const ldoorRef = useRef<HTMLDivElement | null>(null);
  const rdoorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ldoorRef.current && rdoorRef.current) {
      const leftDoor = ldoorRef.current;
      const rightDoor = rdoorRef.current;

      leftDoor.style.transition = "1s";
      rightDoor.style.transition = "1s";

      leftDoor.style.width = "50%";
      rightDoor.style.width = "50%";
    }
    load();
  }, []);
  function load() {
    if (ldoorRef.current && rdoorRef.current) {
      const leftDoor = ldoorRef.current;
      const rightDoor = rdoorRef.current;

      leftDoor.style.width = "50%";
      rightDoor.style.width = "50%";
    }
  }

  return (
    <div>
      <div
        id="ldoor"
        ref={ldoorRef}
        className="door left-0  border-solid border-2 border-navy relative  top-0 w-0 h-screen overflow-x-hidden cursor-pointer bg-white"
        onClick={() => openDoor(ldoorRef.current!, rdoorRef.current!)}
      ></div>
      <div
        id="rdoor"
        ref={rdoorRef}
        className="door right-0  border-solid border-2 border-navy fixed top-0 w-0 h-screen overflow-x-hidden cursor-pointer bg-white"
        onClick={() => openDoor2(ldoorRef.current!, rdoorRef.current!)}
      ></div>
    </div>
  );
};

export default Doors;
