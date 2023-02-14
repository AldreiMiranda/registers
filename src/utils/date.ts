export const formatStandardDate = (date: Date) => {
  if (!date) return 'invalid_date';
  const d = new Date(date)
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}
