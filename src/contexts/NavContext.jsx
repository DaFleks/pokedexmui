import { useState, createContext, useContext } from "react";

const NavContext = createContext();
export const useNavContext = () => useContext(NavContext);

const NavProvider = (props) => {
  const [navOption, setNavOption] = useState(0);

  return <NavContext.Provider value={{ navOption, setNavOption }}>{props.children}</NavContext.Provider>;
};

export default NavProvider;