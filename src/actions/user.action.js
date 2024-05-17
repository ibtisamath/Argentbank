import axios from "axios";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";
export const USER_PROFILE = "USER_PROFILE";
export const UPDATE_USER_NAME = "UPDATE_USER_NAME";

// Action to manage the success user login
export const userLoginSuccess = () => ({
  type: USER_LOGIN_SUCCESS,
});

// Action to manage the failure user login
export const userLoginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});

// Action to manage the user logout
export const logoutUser = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  return {
    type: LOGOUT_USER,
  };
};

// Action to manage the user connection
export const loginUser = (email, password, navigate, rememberMe) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        const token = response.data.body.token;
        if (rememberMe) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }
        navigate("/user-account");
        dispatch(userLoginSuccess());
      } 
    } catch (error) {
      dispatch(userLoginFailure("identifiants incorrects"));
      
    }
  };
};


// Action to get the profil user
export const fetchUserProfile = () => {
  return async (dispatch) => {
    let token = localStorage.getItem("token");

    if (!token) {
      token = sessionStorage.getItem("token");
    }

    if (!token) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const userProfile = response.data.body;
        dispatch({
          type: USER_PROFILE,
          payload: userProfile,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
};


// Action to update the user name
export const updateUserName = (userName) => {
  return async (dispatch) => {
    let token = localStorage.getItem("token");

    if (!token) {
      token = sessionStorage.getItem("token");
    }

    if (!token) {
      return;
    }

    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { userName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        dispatch({
          type: UPDATE_USER_NAME,
          payload: userName,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
};
