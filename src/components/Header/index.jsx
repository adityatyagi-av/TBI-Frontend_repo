'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Logo } from "./Logo.jsx";
import { menuItems } from './menuData.jsx'
import Link from "next/link.js";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl" height="5rem" justify="start" >
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
          <Link href="/about" className=" text-gray-700 hover:text-blue-900 text-md font-normal active:text-blue-900 focus:text-blue-900">
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/events" className=" text-gray-700 hover:text-blue-900 text-md font-normal active:text-blue-900 focus:text-blue-900">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/mentors" className=" text-gray-700 hover:text-blue-900 text-md font-normal active:text-blue-900 focus:text-blue-900">
            Mentors
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/incubation" className=" text-gray-700 hover:text-blue-900 text-md font-normal active:text-blue-900 focus:text-blue-900">
            Incubation
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/facilities" className=" text-gray-700 hover:text-blue-900 text-md font-normal active:text-blue-900 focus:text-blue-900">
            Facilities
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/gallery" className=" text-gray-700 hover:text-blue-900 text-md font-normal active:text-blue-900 focus:text-blue-900">
            Gallery
          </Link>

        </NavbarItem>
        <NavbarItem >
          <Link href="/contact" className=" text-gray-700 hover:text-blue-900 text-md font-normal active:text-blue-900 focus:text-blue-900">
            Contact
          </Link>
        </NavbarItem>

      </NavbarContent>


      <NavbarMenu justify="end">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className=" text-gray-700 hover:text-blue-900 text-md font-normal active:text-blue-900 focus:text-blue-900" >
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
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
