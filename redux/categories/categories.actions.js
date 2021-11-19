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
           const collectionsRef =firestore.collection("Collections");
           dispatch(fetch_categories_start());
    collectionsRef.get().then( (snapShot)=>{
     const collectionMap =  convertCollectionsSnapshotToMap(snapShot);
          dispatch(fetch_categories_success(collectionMap))  
    }).catch(error=>{
              dispatch(fetch_categories_failure(error.message))
              console.log("error is here bro !",error.message)
    })
    }
 }