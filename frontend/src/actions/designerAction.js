import axios from "axios";

import {ALL_DESIGNER_FAIL,
    ALL_DESIGNER_REQUEST,
    ALL_DESIGNER_SUCCESS,
    DESIGNER_DETAILS_REQUEST,
    DESIGNER_DETAILS_SUCCESS,
    DESIGNER_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/designerConstants";


export const getDesigner = (keyword="", currentPage=1, experience=[0,25], category, ratings=0 ) => 
async (dispatch)=>{

    try {

        dispatch({ type : ALL_DESIGNER_REQUEST });

        let link = `/api/v1/designers?keyword=${keyword}&page=${currentPage}&experience[gte]=${experience[0]}&experience[lte]=${experience[1]}&ratings[gte]=${ratings}`;
        
        if(category){
            link = 
            `/api/v1/designers?keyword=${keyword}&page=${currentPage}&experience[gte]=${experience[0]}&experience[lte]=${experience[1]}
            &category=${category}&ratings[gte]=${ratings}`;
        }
        const {data} = await axios.get(link);

        dispatch({
            type : ALL_DESIGNER_SUCCESS,
            payload :  data,

        })
        
    } catch (error) {
        dispatch({
            type : ALL_DESIGNER_FAIL,
            payload : error.response.data.message,
        });
    }
};



//get designer details
export const getDesignerDetails = (id) => async (dispatch) => {

    try {

        dispatch({ type: DESIGNER_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/v1/designer/${id}`);

        dispatch({
            type : DESIGNER_DETAILS_SUCCESS,
            payload :  data.designer,

        });
        
    } catch (error) {
        dispatch({
            type : DESIGNER_DETAILS_FAIL,
            payload : error.response.data.message,
        });
    }
};

//clearing Errors
export const clearErrors = ()=> async (dispatch)=>{
    dispatch({
        type: CLEAR_ERRORS
    });
};