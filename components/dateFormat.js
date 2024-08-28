const options = { day: "2-digit", month: "short", year: "numeric" };
const changeFormat = (isoDate) => {
  const formattedDate = new Date(isoDate).toLocaleDateString("en-GB", options);

  return formattedDate;
};

export default changeFormat;
