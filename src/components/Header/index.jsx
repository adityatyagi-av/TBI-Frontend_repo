'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Logo } from "./Logo.jsx";
import { menuItems } from './menuData.jsx'
import Link from "next/link.js";
import IncubationDropdown from "./IncubationDropdown.jsx";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
    <Navbar 
    onMenuOpenChange={setIsMenuOpen} 
    maxWidth="xl" 
    height="6rem" 
    justify="start"

     >
      <NavbarContent className="flex flex-row-reverse justify-between items-center">
        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden "
          justify="start"
        />
        <NavbarBrand justify="start">

          <Link href="/" className="gap-2 flex">
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6 focus:underline" justify="center" >

        <NavbarItem>
          <Link href="/about" className="text-[18px] text-gray-800   hover:text-blue-950 text-md font-normal active:text-blue-950 focus:text-blue-950">
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/events" className="text-[18px] text-gray-800   hover:text-blue-950 text-md font-normal active:text-blue-950 focus:text-blue-950">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/mentors" className="text-[18px] text-gray-800  hover:text-blue-950 text-md font-normal active:text-blue-950 focus:text-blue-950">
            Mentors
          </Link>
        </NavbarItem>
        
        <NavbarItem >
          <IncubationDropdown/>

        </NavbarItem>
        <NavbarItem >
          <Link href="/facilities" className="text-[18px] text-gray-800 hover:text-blue-950 text-md font-normal active:text-blue-950 focus:text-blue-950">
            Facilities
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/gallery" className="text-[18px] text-gray-800 hover:text-blue-950 text-md font-normal active:text-blue-950 focus:text-blue-950">
            Gallery
          </Link>

        </NavbarItem>
        
        <NavbarItem >
          <Link href="/contact" className="text-[18px] text-gray-800 hover:text-blue-950 text-md font-normal active:text-blue-950 focus:text-blue-950">
            Contact
          </Link>
        </NavbarItem>

      </NavbarContent>


      <NavbarMenu justify="end">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className=" text-gray-700 hover:text-blue-950 text-md font-normal active:text-blue-950 focus:text-blue-950" >
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-1/2"
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
