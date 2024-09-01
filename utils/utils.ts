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

export function getWeekDates(nextWeek?: number) {
  const today = new Date();
  // Wochentag holen (0 = Sonntag, 1 = Montag, ..., 6 = Samstag)
  const dayOfWeek = today.getDay();
  // Anzahl der Tage bis Montag bzw. Sonntag berechnen
  // Offset für Montag berechnen (falls heute Montag ist, ist der Offset 0)
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  // Offset für Sonntag berechnen
  const sundayOffset = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
  // Wenn nextWeek true ist, eine Woche (7 Tage) hinzufügen
  const additionalDays =
    nextWeek === 1 ? 7 : nextWeek === 0 ? 0 : nextWeek === -1 ? -7 : 0;
  // Montag und Sonntag der gewünschten Woche berechnen
  const monday = new Date(today);
  monday.setDate(today.getDate() + mondayOffset + additionalDays);
  const sunday = new Date(today);
  sunday.setDate(today.getDate() + sundayOffset + additionalDays);
  // Funktion, um das Datum im Format DD-MM zurückzugeben
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${day}-${month}`;
  };
  // Montag und Sonntag im gewünschten Format zurückgeben
  return {
    monday: formatDate(monday),
    sunday: formatDate(sunday),
  };
}
