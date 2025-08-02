import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

function ContactForm() {
  const [form, setForm] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateField = (name: string, value: string) => {
    let error = "";
    if (!value.trim()) {
      error = "This field is required.";
    } else {
      if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = "Please enter a valid email address.";
        }
      }
      if (name === "phone") {
        if (value.length < 9) {
          error = "Please enter a valid phone number.";
        }
      }
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasErrors = false;

    Object.entries(form).forEach(([name, value]) => {
      validateField(name, value);
      if (!value.trim() || errors[name as keyof typeof errors]) {
        hasErrors = true;
      }
    });

    if (hasErrors) return;

    const templateParams = {
      ...form,
      name: `${form.firstName} ${form.lastName}`,
      time: new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    };

    toast.promise(
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ),
      {
        loading: "Sending message...",
        success: () => {
          setForm({
            title: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
          return "Message sent successfully!";
        },
        error: "Something went wrong. Try again later.",
      }
    );
  };

  return (
    <section className="w-full mt-10 mx-auto px-4 text-black dark:text-white">
      <h2 className="text-3xl font-serif font-semibold text-center mb-6">
        Contact Us
      </h2>
      <hr className="border-gray-300 dark:border-white/30 max-w-2xl mb-6 mx-auto" />
      <p className="text-sm mb-4 text-blue-600 italic dark:text-blue-400">
        Fields marked<span className="text-red-600"> * </span>are required
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg font-medium mb-1">
            Subject/Title<span className="text-red-600"> *</span>
          </label>
          <input
            required
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. Booking Inquiry"
            className={`border-b bg-transparent py-1 focus:outline-none text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 ${
              errors.title ? "border-red-500" : "border-black dark:border-white"
            }`}
          />
          {errors.title && (
            <span className="text-sm text-red-600 mt-1">{errors.title}</span>
          )}
        </div>

        {/* First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {["firstName", "lastName"].map((field) => (
            <div key={field} className="flex flex-col">
              <label htmlFor={field} className="text-lg font-medium mb-1 capitalize">
                {field.replace(/([A-Z])/g, " $1")}
                <span className="text-red-600"> *</span>
              </label>
              <input
                required
                type="text"
                id={field}
                name={field}
                value={form[field as keyof typeof form]}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border-b bg-transparent py-1 focus:outline-none text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 ${
                  errors[field as keyof typeof errors]
                    ? "border-red-500"
                    : "border-black dark:border-white"
                }`}
              />
              {errors[field as keyof typeof errors] && (
                <span className="text-sm text-red-600 mt-1">
                  {errors[field as keyof typeof errors]}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium mb-1">
              Email<span className="text-red-600"> *</span>
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="you@example.com"
              className={`border-b bg-transparent py-1 focus:outline-none text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 ${
                errors.email ? "border-red-500" : "border-black dark:border-white"
              }`}
            />
            {errors.email && (
              <span className="text-sm text-red-600 mt-1">{errors.email}</span>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-lg font-medium mb-1">
              Phone<span className="text-red-600"> *</span>
            </label>
            <PhoneInput
              country={"ke"}
              value={form.phone}
              onChange={(phone) => {
                setForm((prev) => ({ ...prev, phone }));
                setErrors((prev) => ({ ...prev, phone: "" }));
              }}
              onBlur={() => validateField("phone", form.phone)}
              inputClass="!bg-transparent !border-none !focus:outline-none !w-full !py-1 !pl-12 !text-base !text-black dark:!text-white placeholder:!text-gray-400 dark:placeholder:!text-gray-500"
              containerClass={`!border-b !bg-transparent !w-full !flex !items-center !relative ${
                errors.phone
                  ? "!border-red-500"
                  : "!border-black dark:!border-white"
              }`}
              buttonClass="!bg-transparent !border-none !p-0 !absolute !left-0 !top-1/2 !-translate-y-1/2"
              inputProps={{
                name: "phone",
                required: true,
                id: "phone",
              }}
              placeholder="+254..."
            />
            {errors.phone && (
              <span className="text-sm text-red-600 mt-1">{errors.phone}</span>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-medium mb-1">
            Message<span className="text-red-600"> *</span>
          </label>
          <textarea
            required
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`border-b bg-transparent py-1 resize-none focus:outline-none text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 ${
              errors.message ? "border-red-500" : "border-black dark:border-white"
            }`}
          />
          {errors.message && (
            <span className="text-sm text-red-600 mt-1">{errors.message}</span>
          )}
        </div>

        {/* Note */}
        <p className="text-xs text-black/70 dark:text-white/70 leading-relaxed">
          Write to us for any and all general inquiry or specific issues and we'll reach out.
          All info provided and correspondence is kept private and secure.
        </p>

        {/* Submit */}
        <div className="pt-4 text-center">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 border border-black dark:border-white rounded-full font-medium bg-black md:bg-white text-white md:text-black dark:md:bg-zinc-700 dark:md:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
