// // stores/reducers/authReducer.ts
// import { LOGIN_SUCCESS, LOGOUT } from "../actions/auth_action";

// interface AuthState {
//   isAuthenticated: boolean;
//   token: string | null;
// }

// const initialState: AuthState = {
//   isAuthenticated: false,
//   token: null,
// };

// const authReducer = (state = initialState, action: any): AuthState => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         isAuthenticated: true,
//         token: action.payload,
//       };
//     case LOGOUT:
//       return {
//         ...state,
//         isAuthenticated: false,
//         token: null,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;
