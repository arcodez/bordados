import { useState, useEffect } from "react";

export function useHandleNavbar() {
  const [theme, setTheme] = useState({
    active: "on",
    icon: "/sun.svg",
  });

  function handleActivo() {
    if (theme.active === "on") {
      setTheme({
        active: "off",
        icon: "/moon.svg",
      });
    } else {
      setTheme({
        active: "on",
        icon: "/sun.svg",
      });
    }
  }

  const Navbar2 = () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navbar = document.querySelector(".header-nav");

    window.onscroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("nav-active");
      } else {
        navbar.classList.remove("nav-active");
      }
    };

    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("nav-menu_visible");

      if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
      } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
      }
    });
  };

  useEffect(() => {
    Navbar2();
  }, []);

  return { theme, handleActivo };
}
