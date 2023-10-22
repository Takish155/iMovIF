export const paperStyles = {
  backgroundColor: "#121212",
  color: "#fff",
  minWidth: "12rem",
  height: "100%",
  width: "100%",
  minHeight: "22rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  gap: "1rem",
  transition: "background-color 0.1s ease",
  "&:hover": {
    backgroundColor: "#424242", //
  },
};

export const paperStyles2 = {
  backgroundColor: "#121212",
  color: "#fff",
  height: "100%",
  width: "100%",
  minHeight: "22rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  gap: "1rem",
  transition: "background-color 0.1s ease",
  "&:hover": {
    backgroundColor: "#424242", //
  },
};

export const nonHoverPaperStyles = {
  backgroundColor: "#121212",
  color: "#fff",
  minWidth: "12rem",
  minHeight: "22rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  gap: "1rem",
  transition: "background-color 0.1s ease",
};

export const horizontalStyling = {
  display: "flex",
  gap: "2rem",
  overflowX: "auto",
  overflowY: "hidden",
  flexWrap: "nowrap",
};

export const verticalStyling = {
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "2rem",
  overflow: "scroll",
  height: "87%",
  width: "100%",
};

export const verticalStylingSkeleton = {
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "2rem",
  overflow: "hidden",
  height: "100%",
  width: "100%",
};

export const heroPaperStyle = {
  width: "95%",
  height: "25rem",
  margin: "3rem auto",
  backgroundColor: "#121212",
  color: "#fff",
};

export const heroLeftSection = {
  display: "flex",
  height: "25rem",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: "2rem",
};

export const heroRightSection = {
  display: "flex",
  height: "25rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};

export const peoplePaper = {
  backgroundColor: "#121212",
  color: "#fff",
  width: "15rem",
  height: "30rem",
  cursor: "pointer",
  transition: "background-color 0.1s ease",
  "&:hover": {
    backgroundColor: "#424242", //
  },
};

export const peopleImage = {
  maxHeight: "80%",
  width: "90%",
  margin: "1.5rem auto",
};

export const peopleImageSkeleton = {
  height: "68%",
  maxHeight: "80%",
  width: "90%",
  margin: "1.5rem auto",
  bgcolor: "grey.900",
};
