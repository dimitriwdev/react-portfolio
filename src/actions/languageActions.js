const setEnglish = () => {
  return {
    type: "SET_ENGLISH"
  };
};

const setFrench = () => {
  return {
    type: "SET_FRENCH"
  };
};

const setLanguage = {
  setEnglish,
  setFrench
};

export default setLanguage;
