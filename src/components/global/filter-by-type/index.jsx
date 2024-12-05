import React from "react";

function FilterByType({ currentPage, selectedType, setSelectedType, types }) {
  return (
    <select
      value={selectedType}
      onChange={(e) => setSelectedType(e.target.value)}
      className="outline-none border rounded px-3 py-2 text-black capitalize text-xs"
      disabled={currentPage > 1}
    >
      {types.map((type) => (
        <option key={type} value={type} className="capitalize text-xs">
          {type}
        </option>
      ))}
    </select>
  );
}

export default FilterByType;
