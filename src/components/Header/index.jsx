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
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="shadow-md pb-1.5 w-full  max-sm:font-serif mb-8 "      
    >

      <NavbarContent className="flex flex-row-reverse sm:flex  justify-between items-center">
        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden  "
          justify="start"
        />
        <NavbarBrand justify="start">
          <Link href="/" onClick={()=> setIsMenuOpen(false)} className="gap-2 flex">
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6 focus:underline" justify="center" >

        <NavbarItem>
          <Link href="/about" onClick={()=> setIsMenuOpen(false)} className="text-[18px] text-gray-800   hover:text-blue-950 text-md font-normal active:text-blue-950 focus:text-blue-950">
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/events"  onClick={()=> setIsMenuOpen(false)} className="text-[18px] text-gray-800   hover:text-blue-950 text-md font-normal active:text-blue-950 focus:text-blue-950">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/mentors" size="lg"  onClick={()=> setIsMenuOpen(false)}  className="text-[18px] text-gray-800  hover:text-blue-950 text-md font-normal active:text-blue-950 focus:text-blue-950">
            Mentors
          </Link>
        </NavbarItem>
        
        <NavbarItem >
          <IncubationDropdown/>
        </NavbarItem>
        <NavbarItem >
          <Link href="/facilities" onClick={()=> setIsMenuOpen(false)} className="text-[18px] text-gray-800 hover:text-blue-950 text-md font-normal active:text-blue-950 focus:text-blue-950">
            Facilities
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/gallery" onClick={()=> setIsMenuOpen(false)} className="text-[18px] text-gray-800 hover:text-blue-950 text-md font-normal active:text-blue-950 focus:text-blue-950">
            Gallery
          </Link>

        </NavbarItem>
        
        <NavbarItem >
          <Link href="/contact" onClick={()=> setIsMenuOpen(false)} className="text-[18px] text-gray-800 hover:text-blue-950 text-md font-normal active:text-blue-950 focus:text-blue-950" >
            Contact
          </Link>
        </NavbarItem>

      </NavbarContent>


      <NavbarMenu justify="end">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="  text-gray-700 hover:text-blue-950 text-md font-bold  text-2xl  text-center font-serif active:text-blue-950 focus:text-blue-950" >
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-1/2"
              onClick={()=> setIsMenuOpen(false)}
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

