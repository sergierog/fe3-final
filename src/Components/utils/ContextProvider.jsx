import { useContext } from "react";
import { createContext, useState } from "react";
import axios from "axios"
import { useEffect } from "react";

export const initialState = {themes:{
  light:{
    className:""
  },
  dark:{
    className:"dark"
  }
}}

export const ContextGlobal = createContext(undefined);
 

 const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [odontologos, setOdontologos] = useState([])
  const [theme, setTheme] = useState(initialState.themes.light)
  const handleChangeTheme = () => {
    if (theme === initialState.themes.light) {
      setTheme(initialState.themes.dark);
    } else {
      setTheme(initialState.themes.light);
    }
  };
  

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
  .then(res => setOdontologos(res.data))
  .catch(err => console.log(err))
  
   
  }, [])
  

  

  return (
    <ContextGlobal.Provider value={{odontologos, theme, setTheme, handleChangeTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider

export const useContextGlobal = ()=>{
  return useContext(ContextGlobal)
}