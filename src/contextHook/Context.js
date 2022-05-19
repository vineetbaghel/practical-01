import { createContext, useState } from "react";

export const context = createContext();
function GlobalContext({ children }) {
  const [personList, setPersonList] = useState([])
  return (
    <context.Provider value={{  personList, setPersonList }}>
      {children}
    </context.Provider>
  );
}
export default GlobalContext
