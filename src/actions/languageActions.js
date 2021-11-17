const setFrench = () => {
  return {
    type: "SET_FRENCH"
  };
};

const setEnglish = () => {
  return {
    type: "SET_ENGLISH"
  };
};

const setLanguage = {
  setFrench,
  setEnglish
};

export default setLanguage;
