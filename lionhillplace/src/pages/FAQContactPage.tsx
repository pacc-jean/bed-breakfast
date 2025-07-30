import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactForm from "../components/FAQ-contact/ContactForm";
import FAQAccordion from "../components/FAQ-contact/FAQAccordion";

function FAQContactPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // Give the browser a moment to render before scrolling
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="w-full px-4 py-12 max-w-7xl mx-auto space-y-24 mt-10">
      {/* Contact Form Section */}
      <section id="contact">
        <ContactForm />
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq">
        <FAQAccordion />
      </section>
    </main>
  );
}

export default FAQContactPage;
