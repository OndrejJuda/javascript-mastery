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
  currentColor: '',
  setColor: (color) => { },
  currentMode: '',
  setMode: (e) => { },
  themeSettings: false,
  setThemeSettings: (value) => { },
};

const StateContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialIsClick);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
    setThemeSettings(false);
  }

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
    setThemeSettings(false);
  }

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
        currentColor,
        setColor,
        currentMode,
        setMode,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);