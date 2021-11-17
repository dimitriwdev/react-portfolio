const initialState = "fr";

const languageReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FRENCH":
      return initialState;
    case "SET_ENGLISH":
      return "en";
    default:
      return initialState;
  }
};

export default languageReducers;