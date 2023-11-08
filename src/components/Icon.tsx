import { Icon as Iconify } from "@iconify/react";
import React from "react";

export const ICONS = {
  up: "mingcute:up-fill",
  down: "mingcute:down-fill",
};

interface IconProps {
  icon: keyof typeof ICONS;
}

export const Icon: React.FC<IconProps> = ({ icon }) => {
  return <Iconify icon={ICONS[icon]} className="min-w-[16px]" />;
};
