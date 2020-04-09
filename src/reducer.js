export const initialState = {
  user: "",
  score: 0,
  currentGame: {},
  games: [],
  scoresTables: [],
  keyboard: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  pageSize: 6,
  currentPage: 1,
  sortColumn: { path: "user", order: "asc" },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SCORE":
      return { ...state, score: action.payload };

    case "SET_USER":
      return { ...state, user: action.payload };

    case "SET_CURRENTGAME":
      return { ...state, currentGame: action.payload };

    case "CANCEL_GAME":
      return {
        ...state,
        games: state.games.map((game) =>
          game._id === action.payload
            ? { ...game, gameStatus: "canceled" }
            : game
        ),
      };

    case "SET_GAMES":
      return { ...state, games: action.payload };

    case "SET_SCORESTABLE":
      return { ...state, scoresTables: action.payload };

    case "ADD_GAME":
      return { ...state, games: [...state.games, action.payload] };

    case "CHANGE_SORT":
      return { ...state, sortColumn: action.payload };

    case "PAGE_CHANGE":
      return { ...state, currentPage: action.payload };

    default:
      throw new Error();
  }
};
