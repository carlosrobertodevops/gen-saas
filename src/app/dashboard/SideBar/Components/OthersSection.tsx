"use client";

import React from "react";
import { MdDarkMode, MdLogout } from "react-icons/md";
import { useAppContext } from "@/app/AppContext";
import LanguageMenu from "@/app/components/LanguageMenu";

function OthersSection() {
  const {
    isDarkModeObject: { isDarkMode, setIsDarkMode },
    secondMenuItemsObject: { secondMenuItems },
  } = useAppContext();

  return (
    <div className="mt-auto space-y-2">
      {/* Seletor de Idioma */}
      <LanguageMenu />

      {/* Outros itens do menu */}
      {secondMenuItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center space-x-3 p-2 rounded cursor-pointer hover:bg-gray-100 ${
            isDarkMode ? "hover:bg-slate-700" : ""
          }`}
          onClick={() => {
            if (item.label === "Dark Mode") {
              setIsDarkMode(!isDarkMode);
            }
            // Adicionar lógica para outros itens do menu
          }}
        >
          <item.icon className="w-5 h-5" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default OthersSection;
