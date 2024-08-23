// // stores/actions/authActions.ts
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGOUT = 'LOGOUT';

// export const loginSuccess = (token: string) => {
//   return {
//     type: LOGIN_SUCCESS,
//     payload: token,
//   };
// };

// export const logout = () => {
//   return {
//     type: LOGOUT,
//   };
// };

// export const loginAsync = (credentials: any) => {
//   return async (dispatch: any) => {
//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         body: JSON.stringify(credentials),
//       });
//       const data = await response.json();
//       if (data.token) {
//         dispatch(loginSuccess(data.token));
//       } else {
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };
// };
