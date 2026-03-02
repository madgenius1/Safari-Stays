export const formatKES = (amount: number) => {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "Ksh",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (date: string | number | Date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
