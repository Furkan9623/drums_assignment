import { createContext, useEffect, useState } from "react";

const loginContext = createContext(null);
const loadingContext = createContext(null);

const ContextProvider = ({ children }) => {
  const presistLogin =
    localStorage.getItem("loginAuth") === "true" ? true : false;
  const [loginAuth, setLoginAuth] = useState(presistLogin);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    localStorage.setItem("loginAuth", loginAuth);
  }, [loginAuth]);
  function loadingStatus() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  return (
    <loadingContext.Provider value={{ loading, setLoading, loadingStatus }}>
      <loginContext.Provider value={{ loginAuth, setLoginAuth }}>
        {children}
      </loginContext.Provider>
    </loadingContext.Provider>
  );
};

export { ContextProvider, loginContext, loadingContext };
