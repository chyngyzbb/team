// import { Product } from "../api/api";

// utils/localStorageHelper.ts
export const saveToLocalStorage =(key:string, value:string|null)=> {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage =(key:string)=> {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const getBasketLocalStorage=(key:string)=>{
  const data=localStorage.getItem(key);
  return data   ? JSON.parse(data) : [];
  // console.log(res);
  // return res
  
}



// export const saveToUser=async()


