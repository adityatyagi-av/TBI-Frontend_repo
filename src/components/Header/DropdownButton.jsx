import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

export default function DropdownButton({lists}) {
  

  return (
    <Dropdown className="px-0 mx-0">
      <DropdownTrigger className="px-0 mx-0">
        <Button className="px-0 mx-0 font-normal"
          variant="none" 
        >
          {lists.title}<Image src="./dropdown.svg" height={20} width={20} alt="dropdown"/>
        </Button>
        
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={lists.items}>
        {(item) => (
          <DropdownItem
          key={item.id}>
            <Link href={item.path}>
            {item.title}
            </Link>
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
