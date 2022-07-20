 const isEmpty = (data) => {
     return data === 0 ? false : !data
 }
 export const clearObj = (obj) => {
     let result = {
         ...obj
     };
     Object.keys(obj).map((item) => {
         const value = obj[item];
         if (isEmpty(value)) {
             delete result[item];
         }
     })
     return result
 }