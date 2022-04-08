// import { PLACE_ORDER_REQUEST,
//     PLACE_ORDER_SUCCESS,
//     PLACE_ORDER_FAIL,
//     CLEAR_ERRORS } from "../constants/orderConstants";

// export const orderReducer = (state = {order: {} }, action => {
//     switch (action.type) {
//         case PLACE_ORDER_REQUEST:
//             return {
//                 loading : true,
//                 isAuthenticated: false,
//             }

//         case PLACE_ORDER_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 isAuthenticated:true,
//                 order: action.payload,
//             };

//         case PLACE_ORDER_FAIL:
//             return {
//                 ...state,
//                 loading: false,
//                 isAuthenticated:false,
//                 order:null,
//                 error:action.payload,
//             };
//         case CLEAR_ERRORS:
//             return {
//                   ...state,
//                   error: null,
//             };
          
//             default:
//                 return state;
//     }
    
// })