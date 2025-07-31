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
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="w-full min-h-screen px-4 py-12 max-w-7xl mx-auto space-y-24 bg-white text-black dark:bg-zinc-700 dark:text-white">
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
