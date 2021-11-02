import { categories } from "../../assets/categories";




const initial_State={
    categories:categories,
}

const categoriesReducer=(state=initial_State,action)=>{
    switch (action.type) {
      
    
        default:
            return state;
    }
}


export default categoriesReducer;