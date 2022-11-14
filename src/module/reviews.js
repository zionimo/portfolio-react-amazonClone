// 초기값

const initialState = {
  reviewList: [
    {
      date: new Date(),
      title: "",
      name: "",
      text: "",
    },
  ],
};

// 액션함수
export const addreview = (review) => ({ type: "addreview", payload: review });

// 리듀서함수
const reviews = (state = initialState, action) => {
  switch (action.type) {
    case "addreview":
      return { ...state, reviewList: state.reviewList.concat(action.payload) };
    default:
      return state;
  }
};

export default reviews;
