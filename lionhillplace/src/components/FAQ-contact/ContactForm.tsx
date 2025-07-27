import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // Replace this with actual submission logic
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-serif font-semibold mb-6">Contact Us</h2>
      <p className="text-sm mb-4 text-blue-600 italic">field marked<span className="text-red-600"> * </span>are required</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-sm font-medium mb-1">
              First Name<span className="text-red-600"> * </span>
            </label>
            <input
              required
              type="text"
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="border-b border-black bg-transparent focus:outline-none py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-sm font-medium mb-1">
              Last Name<span className="text-red-600"> * </span>
            </label>
            <input
              required
              type="text"
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="border-b border-black bg-transparent focus:outline-none py-1"
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium mb-1">
              Email<span className="text-red-600"> * </span>
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border-b border-black bg-transparent focus:outline-none py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium mb-1">
              Phone Number<span className="text-red-600"> * </span>
            </label>
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+254..."
              className="border-b border-black bg-transparent focus:outline-none py-1"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium mb-1">
            Message<span className="text-red-600"> * </span>
          </label>
          <textarea
            required
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="border-b border-black bg-transparent focus:outline-none py-1 resize-none"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-black/70 leading-relaxed max-w-2xl">
          Write to us for any and all general inquiry or specific issues and we'll reach out. All info
          provided and correspondence is kept private and secure.
        </p>

        {/* Submit */}
        <div className="pt-4 text-center">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 border border-black rounded-full font-medium hover:bg-black hover:text-white transition"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
