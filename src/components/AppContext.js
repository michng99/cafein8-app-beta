import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'
import { create } from 'react-test-renderer';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const{children} = props;

    const [isLogin , setLogin] = useState(false);
    const [infoUser, setinfoUser] = useState({});

  return (
    <AppContext.Provider value={{isLogin, setLogin, infoUser, setinfoUser}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContext
