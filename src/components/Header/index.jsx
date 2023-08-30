'use client'
import React from "react";
import {Navbar, NavbarBrand,NavbarMenu,NavbarMenuToggle,NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Logo} from "./Logo.jsx";
import DropdownButton from "./DropdownButton.jsx";
import {dropDowmItems,dropDownItems,menuItems} from './menuData.jsx'
import './navbar.css'
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const dropDowmItems=dropDownItems;
  

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="flex flex-row-reverse">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden "
          justify="end"
        />
        <NavbarBrand >
        <Link href="/" className="gap-2">
          <Logo />
          <p className="font-bold  text-2xl">TBI KIET</p>
        </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">

        <NavbarItem className="pr-2">
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem  >
          <DropdownButton  lists={dropDownItems[0]} />
        </NavbarItem>
        <NavbarItem className="pl-1 pr-2">
          <Link color="foreground" href="/mentors">
            Mentors
          </Link>
        </NavbarItem>
        <NavbarItem > 
          <DropdownButton lists={dropDownItems[1]} />
        </NavbarItem>
        <NavbarItem className="item pl-2 pr-2">
          <Link color="foreground"  href="/gallery">
           Gallery
          </Link>
        </NavbarItem>
        
        <NavbarItem >
          <DropdownButton lists={dropDownItems[2]} />
        </NavbarItem>
        <NavbarItem className="item pl-1 pr-2">
          <Link color="foreground"  href="/contact">
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
