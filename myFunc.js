function findDatesInString(str) {
  const regex = /(\d{1,2})\/(\d{1,2})\/(\d{4})/g;
  const matches = str.match(regex);
  return matches ? matches : [];
}

export  { findDatesInString }