export function parseDate(date) {
  if (date) {
    try {
      const dt = new Date(date);
      const day = dt.getDate().toString().padStart(2, "0");
      const month = (dt.getMonth() + 1).toString().padStart(2, "0");
      const year = dt.getFullYear();
      return `${day}/${month}/${year}`;
    } catch (e) { }
  }
  return "";
}