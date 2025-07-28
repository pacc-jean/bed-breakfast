import ContactForm from "../components/FAQ-contact/ContactForm";
import FAQAccordion from "../components/FAQ-contact/FAQAccordion";

function FAQContactPage() {
  return (
    <main className="w-full px-4 py-12 max-w-7xl mx-auto space-y-24 mt-10">
      {/* Contact Form Section */}
      <section>
        <ContactForm />
      </section>

      {/* FAQ Accordion Section */}
      <section>
        <FAQAccordion />
      </section>
    </main>
  );
}

export default FAQContactPage;
