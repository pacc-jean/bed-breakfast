function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lime-100 to-emerald-200 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-emerald-600 mb-4">
          🦁 Lion Hill Place
        </h1>
        <p className="text-gray-700 mb-6">
          Tailwind CSS is working beautifully! This Bed & Breakfast is about to go live.
        </p>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition">
          Make a Reservation
        </button>
      </div>
    </div>
  );
}

export default App;
