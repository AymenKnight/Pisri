import User_actions from "./user.actions.Constants";

 export const set_Current_user =(user)=>({
    type:User_actions.SET_CURRENT_USER,
    payload:user
})