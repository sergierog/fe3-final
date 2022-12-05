import { useContext } from "react";
import { createContext, useState } from "react";
import axios from "axios"
import { useEffect } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);
 

 const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [odontologos, setOdontologos] = useState([])
  

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
  .then(res => setOdontologos(res.data))
  .catch(err => console.log(err))
  
   
  }, [])
  

  
 
  
  
  return (
    <ContextGlobal.Provider value={{odontologos, setOdontologos}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider

export const useContextGlobal = ()=>{
  return useContext(ContextGlobal)
}