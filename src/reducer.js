export const initialState = {
  user: "",
  score: 0,
  currentGame: {},
  games: [],
  keyboard: [
    { key: "A", played: true },
    { key: "B", played: false },
    { key: "C", played: false },
    { key: "D", played: false },
    { key: "E", played: false },
    { key: "F", played: false },
    { key: "G", played: false },
    { key: "H", played: false },
    { key: "I", played: false },
    { key: "J", played: false },
    { key: "K", played: false },
    { key: "L", played: false },
    { key: "M", played: false },
    { key: "N", played: false },
    { key: "O", played: false },
    { key: "P", played: false },
    { key: "Q", played: false },
    { key: "R", played: false },
    { key: "S", played: false },
    { key: "T", played: false },
    { key: "U", played: false },
    { key: "V", played: false },
    { key: "W", played: false },
    { key: "X", played: false },
    { key: "Y", played: false },
    { key: "Z", played: false }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "KEY_UPDATE":
      return {
        ...state,
        keyboard: state.keyboard.map(elt =>
          elt.key === action.payload.key
            ? { ...elt, played: action.payload.played }
            : elt
        )
      };
    case "KEYBOARD_RESET":
      return {
        ...state,
        keyboard: state.keyboard.map(elt => ({ ...elt, played: false }))
      };

    case "SET_SCORE":
      return { ...state, score: action.payload };

    case "SET_USER":
      return { ...state, user: action.payload };

    case "SET_CURRENTGAME":
      return { ...state, currentGame: action.payload };

    case "SET_GAMES":
      return { ...state, games: action.payload };

    default:
      throw new Error();
  }
};
