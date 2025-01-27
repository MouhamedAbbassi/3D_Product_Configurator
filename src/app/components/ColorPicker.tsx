// components/ColorPicker.tsx
import React from 'react';

interface ColorPickerProps {
  color: string;
  onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onColorChange }) => {
  return (
    <div className="flex items-center mr-10">
      <span className="text-white text-sm sm:text-base">Color:</span>
      <input
        type="color"
        value={color}
        onChange={(e) => onColorChange(e.target.value)}
        className="w-20 h-10 sm:w-24 sm:h-10 rounded-md cursor-pointer border-2 border-gray-400 focus:outline-none transition-transform transform hover:scale-110"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}`,
        }}
      />
    </div>
  );
};

export default ColorPicker;