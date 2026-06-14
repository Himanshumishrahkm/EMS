import { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";


import Employee from "./component/DashBoard/Employee";  
import Admin from "./component/DashBoard/Admin";

import AuthProvider, { AuthContext } from "./Context/AuthProvider";

const App = () => {

    const AuthData = useContext(AuthContext);
    
   const {employees,admin} = AuthData;
   
 
    
    const [user, setUser] = useState(null)
    const [UserLog, setUserLog] = useState()

    
    
    
    
    const handleLogin = (email,password)=>{
      if(email == 'admin@123' && password == 123)
      {
        setUser('admin')
      }
      else if(AuthData)
      {
        const em_data = employees.find((e)=> e.email === email && e.password === password)
        if(em_data)
        {
          
          
          setUser('Employee');
          setUserLog(em_data);
          
          
          
          
          
          
          
          
          
        }
       
        
      }
      else
      {
        alert("Invalid Input...");
      }
    }
  
  return (
   <>
    
      
    {!user ? <Login handleLogin = {handleLogin}  /> : ''}
    {user == 'admin' ? <Admin/> : ((UserLog) ? <Employee data={UserLog}/> : null)}
      

    </>
  )
}

export default App
