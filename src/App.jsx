import { useEffect } from "react";
import {
  Hero,
  Menu,
  Navbar,
  Footer,
  Gallery,
  Blog,
  Contact,
} from "./components";

function App() {
  useEffect(() => {
    const handleMenuClick = (event) => {
      event.preventDefault();

      // Traverse up the DOM to find the parent 'li' element
      let targetElement = event.target;
      while (targetElement.tagName !== "LI") {
        targetElement = targetElement.parentNode;
      }

      // Extract the 'href' attribute from the 'a' element inside the 'li'
      const targetId = targetElement.querySelector("a").getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Assuming your menu items are direct children of the 'ul' element
    const menuItems = document.querySelectorAll("nav ul li");

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", handleMenuClick);
    });

    return () => {
      menuItems.forEach((menuItem) => {
        menuItem.removeEventListener("click", handleMenuClick);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <section id="menu">
        <Menu />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
