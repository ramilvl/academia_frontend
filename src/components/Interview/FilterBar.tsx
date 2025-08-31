import React from "react";

interface FilterBarProps {
  selectedDifficulty: string;
  setDifficulty: (val: string) => void;
  levels: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedDifficulty,
  setDifficulty,
  levels,
}) => {
  return (
    <div className="filter-bar">
      {/* Çətinlik seçimi */}
      <select value={selectedDifficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="">Bütün səviyyələr</option>
        {levels.map((level) => (
          <option key={level} value={level.toLowerCase()}>
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
