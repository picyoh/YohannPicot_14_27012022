// Format Date
const formatDate = (date) => {
  const splitDate = date.toISOString().split("T")[0].split("-");
  return splitDate[1] + "/" + splitDate[2] + "/" + splitDate[0];
};

// date initialisation
const initDate = () => {
  // get Date
  const date = new Date();
  const dateFormat = formatDate(date);
  // set a minimal date
  const splitDate = date.toISOString().split("T")[0].split("-");
  const minimalYear = splitDate[0] - 13;
  const minimalDate = splitDate[1] + "/" + splitDate[2] + "/" + minimalYear;
  return [
    { category: "startDate", value: dateFormat },
    { category: "dateOfBirth", value: minimalDate },
  ];
};

export { formatDate, initDate };
