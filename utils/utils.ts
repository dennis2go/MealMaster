import { redirect } from "next/navigation";

/**
 * Redirects to a specified path with an encoded message as a query parameter.
 * @param {('error' | 'success')} type - The type of message, either 'error' or 'success'.
 * @param {string} path - The path to redirect to.
 * @param {string} message - The message to be encoded and added as a query parameter.
 * @returns {never} This function doesn't return as it triggers a redirect.
 */
export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string
) {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}

export function getWeekDates() {
  const today = new Date();
  // Wochentag holen (0 = Sonntag, 1 = Montag, ..., 6 = Samstag)
  const dayOfWeek = today.getDay() + 7;
  // Offset für Montag berechnen (falls heute Montag ist, ist der Offset 0)
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  // Offset für Sonntag berechnen (falls heute Sonntag ist, ist der Offset 0)
  const sundayOffset = 7 - dayOfWeek;
  // Montag und Sonntag dieser Woche berechnen
  const monday = new Date(today);
  monday.setDate(today.getDate() + mondayOffset);
  const sunday = new Date(today);
  sunday.setDate(today.getDate() + sundayOffset);
  const formatDate = (date: any) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${day}-${month}`;
  };
  return {
    monday: formatDate(monday),
    sunday: formatDate(sunday),
  };
}
