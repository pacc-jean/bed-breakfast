import BookingForm from "../components/book/BookingForm"

export default function BookingPage() {
  return (
    <div className="min-h-screen px-4 py-12 bg-white dark:bg-zinc-700 text-black dark:text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mt-12 mb-6 text-center">Booking Request</h1>
        <BookingForm />
      </div>
    </div>
  );
}
