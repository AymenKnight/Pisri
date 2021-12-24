import { categories } from "../../assets/categories";
import categories_actions from "./categories.actions.Constants";




const initial_State={
    categories:categories,
    categoriesIsFetching :true,
    errorMessage : undefined
}

const categoriesReducer=(state=initial_State,action)=>{
    switch (action.type) {
        case categories_actions.FETCH_CATEGORIES_START : 
        return {
            ...state ,
            categoriesIsFetching :true,
        }
        case categories_actions.FETCH_CATEGORIES_SUCCESS : 
        return {
            ...state ,
            categories : action.payload ,
            categoriesIsFetching :false,
        }
        case categories_actions.FETCH_CATEGORIES_FAILURE : 
        return {
            ...state ,
            errorMessage :action.payload,
             categoriesIsFetching :false,
        }
    
        default:
            return state;
    }
}


export default categoriesReducer;