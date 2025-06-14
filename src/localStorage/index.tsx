// utils/localStorageHelper.ts
export const saveToLocalStorage =(key, value)=> {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage =(key)=> {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const getBasketLocalStorage=(key)=>{
  const data=localStorage.getItem(key);
  return data   ? JSON.parse(data) : [];
  // console.log(res);
  // return res
  
}



// export const saveToUser=async()


