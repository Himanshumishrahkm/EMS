import  { createContext, useEffect, useState } from 'react'
import { GetLocalStorage, SetLocalStorage } from '../utils/LocalStorage';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [UserData, setUserData] = useState({})
  useEffect(() => {

    const {employees,admin} = GetLocalStorage();
    setUserData({employees,admin});

  }, [])
  
  return (

    
      <AuthContext.Provider value={UserData}>
      {children}
      </AuthContext.Provider>
    
  )
}

export default AuthProvider
