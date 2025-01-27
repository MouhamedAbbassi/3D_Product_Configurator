// components/ShapeDropdown.tsx
import React from 'react';

interface ShapeDropdownProps {
  shape: 'CUBE' | 'SPHERE' | 'HEART' | 'CYLINDER' | 'CONE';
  onShapeChange: (shape: 'CUBE' | 'SPHERE' | 'HEART' | 'CYLINDER' | 'CONE') => void;
}

const ShapeDropdown: React.FC<ShapeDropdownProps> = ({ shape, onShapeChange }) => {
  return (
    <div className="flex items-center mr-10">
      <select
        value={shape}
        onChange={(e) => onShapeChange(e.target.value as 'CUBE' | 'SPHERE' | 'CYLINDER' | 'CONE' | 'HEART')}
        className="p-2 bg-black text-gray-300 rounded-md cursor-pointer border-2 border-gray-300 focus:outline-none transition-transform transform hover:scale-110 shadow-md w-full sm:w-auto ml-12 m-2"
      >
        <option value="CUBE">Cube</option>
        <option value="SPHERE">Sphere</option>
        <option value="CYLINDER">Cylinder</option>
        <option value="CONE">Cone</option>
        <option value="HEART">Heart</option>
      </select>
    </div>
  );
};

export default ShapeDropdown;