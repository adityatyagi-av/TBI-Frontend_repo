'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Logo } from "./Logo.jsx";
import { menuItems } from './menuData.jsx'
import Link from "next/link.js";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl" height="5rem" justify="start">
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

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">

        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/events">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/mentors">
            Mentors
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/incubation">
            Incubation
          </Link>
        </NavbarItem>
        <NavbarItem className="pr-2">
          <Link color="foreground" href="/facilities">
            Facilities
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/gallery">
            Gallery
          </Link>
          
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>

      </NavbarContent>


      <NavbarMenu justify="end">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
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
