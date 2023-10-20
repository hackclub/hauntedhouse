import React from "react";

interface RoomsProps {
  selectedRoom: string;
}

function Rooms({ selectedRoom }: RoomsProps) {
  return (
    <div>
      <h1>Rooms</h1>
      <div>
        {selectedRoom === "Haunted House" && (
          <ul>
            <li>Library</li>
            <li>Kitchen</li>
            <li>Bedroom</li>
            <li>Hall</li>
          </ul>
        )}
        {selectedRoom === "Bay Area" && (
          <ul>
            <li>Library</li>
            <li>Kitchen</li>
            <li>Bedroom</li>
            <li>Hall</li>
          </ul>
        )}
        {selectedRoom === "Georgia" && (
          <ul>
            <li>Library</li>
            <li>Kitchen</li>
            <li>Bedroom</li>
            <li>Hall</li>
          </ul>
        )}
        {selectedRoom === "Toronto" && (
          <ul>
            <li>Library</li>
            <li>Kitchen</li>
            <li>Bedroom</li>
            <li>Hall</li>
          </ul>
        )}
        {selectedRoom !== "Satellites" &&
          selectedRoom !== "Haunted House" &&
          selectedRoom !== "Bay Area" &&
          selectedRoom !== "Georgia" &&
          selectedRoom !== "Toronto" && <li>{selectedRoom}</li>}
      </div>
    </div>
  );
}

export default Rooms;
