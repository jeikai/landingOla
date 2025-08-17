import React, { useState, useEffect } from "react";

// Import components
import Navigation from "./components/Navigation.jsx";
import HeroSection from "./components/HeroSection.jsx";
import CoursesSection from "./components/CoursesSection.jsx";
import TeamSection from "./components/TeamSection.jsx";
import CompaniesSection from "./components/CompaniesSection.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

const OlaClassLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "courses", "team", "register", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full mx-auto overflow-x-hidden">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <HeroSection scrollToSection={scrollToSection} />
      <CoursesSection />
      <TeamSection />
      {/* <CompaniesSection /> */}
      <RegistrationForm />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default OlaClassLanding;