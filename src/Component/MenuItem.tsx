import Link from "next/link";
import React from "react";
import { MenuItemProps } from "../../types";

const MenuItem = ({ title, address, Icon }: MenuItemProps) => {
  return (
    <Link href={address} className="hover:text-amber-600">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
};

export default MenuItem;
