export function formatDate(date: Date) {
  const dateFormatted = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(date);

  return dateFormatted;
}
