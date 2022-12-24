import React from "react";
import { Select } from "@chakra-ui/react";
const categories: string[] = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

export default function CategoryList() {
  return (
    <div>
      <Select placeholder="Filter by">
        {categories.map((category, idx) => (
          <option key={idx} value={idx}>
            {category[0].toUpperCase() + category.slice(1)}
          </option>
        ))}
      </Select>
    </div>
  );
}
