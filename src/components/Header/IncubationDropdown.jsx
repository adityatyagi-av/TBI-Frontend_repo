'use client'
import React from "react";

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import Link from "next/link";

export default function IncubationDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
         variant="none"
         size="lg"
         className="text-[18px] px-0"
        >
          Incubation
        </Button>
      </DropdownTrigger>
      <DropdownMenu >
        <DropdownItem key="nidhieir"><Link href="/incubation/nidhieir">NIDHI EIR</Link></DropdownItem>
        <DropdownItem key="nidhiprayas"><Link href="/incubation/nidhiprayas">NIDHIR PRAYAS</Link></DropdownItem>
        <DropdownItem key="tide"><Link href="/incubation/tide">TIDE 2.0</Link ></DropdownItem>
        <DropdownItem key="msme"><Link href="/incubation/msme">MSME</Link></DropdownItem>
        <DropdownItem key="startincubation"><Link href="/incubation/startincubation">Start Incubation</Link></DropdownItem>
        <DropdownItem key="idex"><Link href="/incubation/idex">IDEX</Link></DropdownItem>
        <DropdownItem key="preincubation"><Link href="/incubation/preincubation">Pre-Incubation</Link></DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

