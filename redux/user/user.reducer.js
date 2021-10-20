import User_actions from "./user.actions.Constants";

const initial_State={
    currentUser:null,
}

const userReducer=(state=initial_State,action)=>{
    switch (action.type) {
        case User_actions.SET_CURRENT_USER:
            return {
                 ...state,
                currentUser : action.payload,
               
            }
    
        default:
            return state;
    }
}

export default userReducer ;