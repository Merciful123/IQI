
import { useState } from "react";
import "./index.css"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

// import neevLogo from "../../assets/neevLogo.svg";
import logo from "../../assets/logo.jpg"


export const AcmeLogo = () => {
  return (
    <>
      <div>
        <img src={logo} alt="Logo" className="w-[100px]"/>
      </div>
    </>
  );
};

export default function Navbarmenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Us", href: "#contact-us" },
    { name: "Company Profile", href: "#company-profile" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="p-[1rem] bg-transparent fixed shadow-[0_2px_5px_rgba(59,130,246,0.5)]"
    >
      <NavbarContent>
        {/* <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        /> */}
        <NavbarBrand className="flex gap-4">
          <AcmeLogo />
          {/* <p className=" text-4xl text-inherit">neev</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="end">
        <NavbarItem>
          <Link
            color="foreground"
            href="/#home"
            className="hover:no-underline relative group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            aria-current="page"
            href="#about"
            className="hover:no-underline relative group"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#services"
            className="hover:no-underline relative group"
          >
            Services
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#projects"
            className="hover:no-underline relative group"
          >
            Projects
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#services"
            className="hover:no-underline relative group"
          >
            Company Profile
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#contact-us"
            className="hover:no-underline relative group"
          >
            Contact Us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="sm:hidden">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#" className="hover:no-underline">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="hover:no-underline"
          >
            Sign Up
          </Button>
        </NavbarItem> */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden min-[1024px]:hidden"
        />
      </NavbarContent>
      <NavbarMenu className="mt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              // color={
              //   index === 2
              //     ? "primary"
              //     : index === menuItems.length - 1
              //     ? "danger"
              //     : "foreground"
              // }
              href={item?.href}
              size="lg"
            >
              {item?.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

