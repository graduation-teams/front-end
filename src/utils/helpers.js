/** Set item in localStorage  */
export const setLocalStorage = (itemName, data) => {
    if (!itemName || !data) return;
    return localStorage.setItem(itemName, data);
  };

/** Get item in localStorage  */
  export const getLocalStorage = itemName => {
    if (!itemName) return;
    return localStorage.getItem(itemName);
  }

/** Remove item in localStorage  */
  export const removeLocalStorage = itemName => {
    if (!itemName) return;
    return localStorage.removeItem(itemName);
  };

  export const SliceString =(str, length)=>{
    if(length > 1 && length !== undefined) {
        return str.slice(0, length) + '...';
    }else if(str.length===0) {
        return '';
    }
}