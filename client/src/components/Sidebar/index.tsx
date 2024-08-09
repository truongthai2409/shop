import React from 'react';
import { Category } from '../../types';

interface SidebarProps {
  categories: Category[];
  onSelectSideBar: (category: Category) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, onSelectSideBar }) => {
  return (
    <aside className="col-span-2 p-8">
      <ul>
        {categories.map((item, index) => (
          <li
            key={index}
            className="p-2 cursor-pointer hover:bg-gray-200"
            onClick={() => onSelectSideBar(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
