import { createContext, useState } from "react";

export const NavigationContext = createContext({});

const NavigationProvider = () => {
  const [actualPath, setActualPath] = useState("/");

  <NavigationContext.Provider value={{ actualPath, setActualPath }} />;
};

export default NavigationProvider;
