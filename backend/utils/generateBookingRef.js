export const generateBookingRef = () => {
  const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
  const timestamp = Date.now().toString().slice(-4); // last 4 digits of timestamp
  return `LionHillPlace-${randomPart}-${timestamp}`;
};
