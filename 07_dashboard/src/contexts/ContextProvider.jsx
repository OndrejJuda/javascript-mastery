import React, { createContext, useContext, useState } from "react";

const initialIsClick = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const initialState = {
  activeMenu: true,
  setActiveMenu: (value) => { },
  isClicked: initialIsClick,
  handleClick: (value) => { },
  screenSize: undefined,
  setScreenSize: (value) => { },
};

const StateContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialIsClick);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialIsClick, [clicked]: true });
  }

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);