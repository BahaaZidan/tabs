export function getToday() {
  const date = new Date();
  return date.toLocaleDateString();
}
