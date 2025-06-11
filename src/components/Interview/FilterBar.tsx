import React from "react";

export type FilterBarProps = {
  selectedCategory: string;
  selectedDifficulty: string;
  setCategory: (val: string) => void;
  setDifficulty: (val: string) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  selectedDifficulty,
  setCategory,
  setDifficulty,
}) => {
  return (
    <div className="filter-bar">
      <select value={selectedCategory} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        {/* Add more options as needed */}
      </select>

      <select value={selectedDifficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="">All Difficulties</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

    </div>
  );
};

export default FilterBar;
