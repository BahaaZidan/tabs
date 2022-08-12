export function getToday() {
  const date = new Date();
  return date.toISOString().substring(0, 10);
}
