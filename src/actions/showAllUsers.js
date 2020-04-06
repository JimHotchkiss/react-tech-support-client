// const API_URL = process.env.REACT_APP_API_URL;

// Async Request
export const showAllUsers = () => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users`)
      .then((response) => response.json())
      .then((users) => {
        dispatch({
          type: "GET_USERS",
          users,
        });
      });
  };
};
