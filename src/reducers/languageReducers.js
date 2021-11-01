const initialState = "en";

const languageReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ENGLISH":
      return initialState;
    case "SET_FRENCH":
      return "fr";
    default:
      return initialState;
  }
};

export default languageReducers;