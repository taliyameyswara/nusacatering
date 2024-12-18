import { Check } from "lucide-react";
import React, { useState } from "react";

const MultiselectDropdown = ({ options, onSave, limit }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      // Remove item if already selected
      setSelectedItems((prev) => prev.filter((selected) => selected !== item));
    } else if (selectedItems.length < limit) {
      // Add item if not yet selected and under the limit
      setSelectedItems((prev) => [...prev, item]);
    }
  };

  const handleSave = () => {
    onSave(selectedItems);
    setIsOpen(false); // Close dropdown after saving
  };

  return (
    <div className="relative w-full">
      {/* Dropdown Button */}
      <button
        type="button"
        className="w-full border rounded-lg px-4 py-2 text-left bg-white focus:outline-none"
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdown();
        }}
      >
        {selectedItems.length > 0
          ? `Menu terpilih (${selectedItems.length}/${limit})`
          : "Pilih Menu"}
      </button>

      {/* Dropdown Items */}
      {isOpen && (
        <div className="absolute z-10 w-full bg-white border rounded-lg shadow-lg mt-2">
          <ul className="max-h-48 overflow-y-auto">
            {options.map((option, index) => (
              <li
                key={index}
                className={`px-4 py-1.5 cursor-pointer hover:bg-gray-50 flex justify-between ${
                  selectedItems.includes(option)
                    ? "bg-primary/5 text-primary"
                    : ""
                }`}
                onClick={() => handleItemClick(option)}
              >
                <span>{option}</span>
                {selectedItems.includes(option) && (
                  <span className="text-primary font-bold">
                    <Check />
                  </span>
                )}
              </li>
            ))}
          </ul>
          {/* Save Button */}
          <div className="p-1 border-t flex justify-end bg-gray-50 rounded-b-lg">
            <button
              onClick={handleSave}
              className="bg-gradient text-sm text-white px-4 py-2 rounded-lg hover:bg-primary transition duration-300"
            >
              Simpan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiselectDropdown;
