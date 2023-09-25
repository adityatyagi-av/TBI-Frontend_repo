import Image from "next/image";

import React from "react";
export const Logo = () => (
  <div className="flex gap-2">
    <Image src='/kietlogo.svg' width={65} height={65} alt="image" />
    <Image src='/tbilogo.svg' width={60} height={60} alt="image" />
  </div>

);
