import React, { useState, ChangeEvent } from "react";

interface FilterButtonProps {
  onFilterChange: (newFilter: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("Bedroom");

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newFilter = event.target.value;
    setSelectedFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex border py-2 pl-4 pr-4 gap-4">
        <div>
          <button
            onClick={() =>
              handleFilterChange({
                target: { value: "Haunted House" },
              } as ChangeEvent<HTMLSelectElement>)
            }
          >
            Haunted House
          </button>
        </div>

        <div>
          <select
            className="outline-none bg-transparent"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="Haunted House">Haunted House</option>
            <option value="Bay Area">Bay Area</option>
            <option value="Georgia">Georgia</option>
            <option value="Toronto">Toronto</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterButton;
