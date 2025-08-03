import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";
import toast from "react-hot-toast";

type BookingType = "room" | "campsite" | "event";

export default function BookingForm() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isSelectingCheckIn, setIsSelectingCheckIn] = useState(true);
  const [bookingType, setBookingType] = useState<BookingType>("room");
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [eventDate, setEventDate] = useState<Date | null>(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState("double");

  useEffect(() => {
    // Read query parameters from URL when component mounts
    const urlParams = new URLSearchParams(window.location.search);
    const bookingTypeParam = urlParams.get('bookingType');
    const roomTypeParam = urlParams.get('roomType');

    if (bookingTypeParam && (bookingTypeParam === 'room' || bookingTypeParam === 'campsite' || bookingTypeParam === 'event')) {
      setBookingType(bookingTypeParam);
    }

    if (roomTypeParam && bookingTypeParam === 'room' && (roomTypeParam === 'double' || roomTypeParam === 'twin' || roomTypeParam === 'apartment')) {
      setRoomType(roomTypeParam);
    }
  }, []);

  const resetForm = () => {
    setCheckIn(null);
    setCheckOut(null);
    setEventDate(null);
    setAdults(2);
    setChildren(0);
    setRoomType("double");
    setIsSelectingCheckIn(true);
    setCurrentMonth(new Date());
  };

  const onSubmit = () => {
    const today = new Date();
    const midnightToday = new Date(today.setHours(0, 0, 0, 0));

    if (bookingType === "event" && (!eventDate || eventDate < midnightToday)) {
      toast.error("Please select a valid event date.");
      return;
    }

    if (bookingType !== "event") {
      if (!checkIn || !checkOut) {
        toast.error("Please select both check-in and check-out dates.");
        return;
      }

      if (checkIn < midnightToday) {
        toast.error("Check-in date cannot be in the past.");
        return;
      }

      if (checkOut <= checkIn) {
        toast.error("Check-out must be after check-in.");
        return;
      }
    }

    if (adults < 1) {
      toast.error("At least one adult must be included.");
      return;
    }

    const formData = {
      bookingType,
      checkIn,
      checkOut,
      eventDate,
      adults,
      children,
      ...(bookingType === "room" && { roomType }),
    };

    console.log("Booking submitted:", formData);
    toast.success("Booking request submitted!");
    resetForm();
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7;

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) days.push(null);
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      days.push(date);
    }
    return days;
  };

  const handleDateClick = (date: Date) => {
    const today = new Date();
    const midnightToday = new Date(today.setHours(0, 0, 0, 0));
    if (date < midnightToday) return;

    if (bookingType === "event") {
      setEventDate(date);
      return;
    }

    if (isSelectingCheckIn || !checkIn || date <= checkIn) {
      setCheckIn(date);
      setCheckOut(null);
      setIsSelectingCheckIn(false);
    } else {
      setCheckOut(date);
      setIsSelectingCheckIn(true);
    }
  };

  const isDateSelected = (date: Date) => {
    if (bookingType === "event") {
      return eventDate?.toDateString() === date.toDateString();
    }
    return (
      checkIn?.toDateString() === date.toDateString() ||
      checkOut?.toDateString() === date.toDateString()
    );
  };

  const isDateInRange = (date: Date) => {
    if (!checkIn || !checkOut || bookingType === "event") return false;
    return date > checkIn && date < checkOut;
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const formatDateWithDay = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  const days = getDaysInMonth(currentMonth);

  const getTitle = () => {
    if (bookingType === "room") return "Book a Room";
    if (bookingType === "campsite") return "Book a Campsite";
    return "Book an Event Space";
  };

  const getButtonText = () => {
    if (bookingType === "room") return "BOOK ROOM";
    if (bookingType === "campsite") return "BOOK CAMPSITE";
    return "BOOK EVENT";
  };

  return (
    <div className="w-full rounded-lg bg-gray-50 dark:bg-zinc-900 dark:text-white p-4">
      {/* Booking Type Selector (Mobile) */}
      <div className="md:hidden mb-4">
        <select
          value={bookingType}
          onChange={(e) => setBookingType(e.target.value as BookingType)}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-zinc-700 dark:text-white rounded-lg"
        >
          <option value="room">Room</option>
          <option value="campsite">Campsite</option>
          <option value="event">Event Space</option>
        </select>
      </div>

      {/* Layout */}
      <div className="w-full flex flex-col md:flex-row md:gap-6 md:items-start">
        {/* Calendar Section */}
        <div className="md:w-[70%]">
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <button onClick={() =>
                setCurrentMonth(
                  new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
                )
              }>
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <h2 className="text-lg font-medium">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h2>
              <button onClick={() =>
                setCurrentMonth(
                  new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
                )
              }>
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Days Header */}
            <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-500 dark:text-gray-400 mb-2">
              {dayNames.map(day => (
                <div key={day} className="py-1">{day}</div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {days.map((date, i) => (
                <div key={i} className="aspect-square">
                  {date && (
                    <button
                      onClick={() => handleDateClick(date)}
                      disabled={date < new Date(new Date().setHours(0, 0, 0, 0))}
                      className={`w-full h-full flex items-center justify-center rounded-full text-sm transition-colors ${
                        isDateSelected(date)
                          ? "bg-blue-500 text-white"
                          : isDateInRange(date)
                          ? "bg-blue-100 dark:bg-blue-600/30 text-blue-600 dark:text-blue-300"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700"
                      }`}
                    >
                      {date.getDate()}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="md:w-[30%] mt-6 md:mt-3 flex flex-col gap-6">
          <div className="hidden md:block">
            <select
              value={bookingType}
              onChange={(e) => setBookingType(e.target.value as BookingType)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-zinc-700 dark:text-white rounded-lg"
            >
              <option value="room">Room</option>
              <option value="campsite">Campsite</option>
              <option value="event">Event Space</option>
            </select>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 shadow-sm flex-1">
            <h3 className="text-lg font-medium mb-4">{getTitle()}</h3>

            {bookingType === "room" && (
              <div className="mb-4">
                <label className="block text-sm mb-1">Room Type</label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-zinc-700 dark:text-white rounded-lg"
                >
                  <option value="double">Double Room</option>
                  <option value="twin">Twin Room</option>
                  <option value="apartment">Apartment</option>
                </select>
              </div>
            )}

            {/* Date Display */}
            {bookingType !== "event" ? (
              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Check In</div>
                  <div className="text-lg font-semibold">{formatDate(checkIn) || "--"}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDateWithDay(checkIn)}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Check Out</div>
                  <div className="text-lg font-semibold">{formatDate(checkOut) || "--"}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDateWithDay(checkOut)}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Event Date</div>
                <div className="text-xl font-semibold">{formatDate(eventDate) || "Select date"}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDateWithDay(eventDate)}
                </div>
              </div>
            )}

            {/* Guests */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: "Adults", value: adults, setValue: setAdults, min: 1 },
                { label: "Children", value: children, setValue: setChildren, min: 0 },
              ].map(({ label, value, setValue, min }) => (
                <div key={label} className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-300 mb-2">{label}</div>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => setValue(Math.max(min, value - 1))}
                      className="w-6 h-6 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-700"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-lg font-semibold w-6">{value}</span>
                    <button
                      onClick={() => setValue(value + 1)}
                      className="w-6 h-6 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-700"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={onSubmit}
              className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
            >
              {getButtonText()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}