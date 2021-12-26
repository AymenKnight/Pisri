import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import categories_actions from "./categories.actions.Constants";


 export const fetch_categories_success =(categories)=>({
     type : categories_actions.FETCH_CATEGORIES_SUCCESS ,
     payload : categories
 }) 
  export const fetch_categories_failure =(errorMessage)=>({
     type : categories_actions.FETCH_CATEGORIES_FAILURE ,
     payload : errorMessage
 }) 

 export const fetch_categories_start = ()=>({
     type : categories_actions.FETCH_CATEGORIES_START
 })

 export const fetch_categories_startAsync = ()=>{
    return  dispatch =>{
           const categoriesRef =firestore.collection("Categories");
           dispatch(fetch_categories_start());
    categoriesRef.get().then( (snapShot)=>{
     const categoriesMap =  convertCollectionsSnapshotToMap(snapShot);
          dispatch(fetch_categories_success(categoriesMap))  
    }).catch(error=>{
              dispatch(fetch_categories_failure(error.message))
    })
    }
 }