const state = {
  message: "Hello world!"
};

const newMessage = "Wow so amazing";

const GET_MESSAGE = "GET_MESSAGE";

export const getMessage = message => ({
  type: GET_MESSAGE,
  message
});

function reducer(state, action) {
  switch (action.type) {
    case GET_MESSAGE:
      return newMessage;
    default:
      return state;
  }
}

export default reducer;
