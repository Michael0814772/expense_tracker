function formatDate(dateTime: string) {
  const date = new Date(dateTime.replace(" ", "T"));

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
export default formatDate;
