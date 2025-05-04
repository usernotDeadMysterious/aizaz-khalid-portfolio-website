import React from "react";
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
} from "@heroui/react";
import ThemeToggle from "./ThemeToggle";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Skills",
    "Projects",
    "Certifications",
    "Contact",
    
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}
    className="bg-slate-200/25 dark:bg-slate-950">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Aizaz Khalid</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link  href="/">
            Home
          </Link>
        </NavbarItem>
        
        <NavbarItem >
          <Link  href="#skills">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="#projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="#certificates">
            Certifications
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      <NavbarItem>
          <ThemeToggle/>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#contact" variant="light"
                    >
            Contact
          </Button>
        </NavbarItem>
        
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href={
                index === 0
                ? "/"
                : index === 1
                ? "#skills"
                : index === 2
                ? "#projects"
                : index === 3
                ? "#certificates"
                : index === 4
                ? "#contact"
                : "#"
              }
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

