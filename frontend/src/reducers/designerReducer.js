import {ALL_DESIGNER_FAIL,
    ALL_DESIGNER_REQUEST,
    ALL_DESIGNER_SUCCESS,
    DESIGNER_DETAILS_REQUEST,
    DESIGNER_DETAILS_SUCCESS,
    DESIGNER_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/designerConstants";

export const designerReducer = (state = { designers : [] }, action) => {
    
    switch (action.type) {
        case ALL_DESIGNER_REQUEST:
            
            return {
                loading: true,
                designers: []
            }

            case ALL_DESIGNER_SUCCESS:
            return {
                loading: false,
                designers: action.payload.designers,
                designerCount: action.payload.designerCount,
                resultPerPage: action.payload.resultPerPage,
                filteredDesignersCount: action.payload.filteredDesignersCount,
            }

            case ALL_DESIGNER_FAIL:
            return {
                loading: false,
                error: action.payload,
            }

            case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
    
        default:
            return state;
    }
};



//get Designer Details
export const designerDetailsReducer = (state = { designer : {} }, action) => {
    
    switch (action.type) {
        case DESIGNER_DETAILS_REQUEST:
            
            return {
                loading: true,
                ...state,
            };

            case DESIGNER_DETAILS_SUCCESS:
            return {
                loading: false,
                designer: action.payload,
            };

            case DESIGNER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

            case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
    
        default:
            return state;
    }
};