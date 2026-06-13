import { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";


import Employee from "./component/DashBoard/Employee";  
import Admin from "./component/DashBoard/Admin";

import AuthProvider, { AuthContext } from "./Context/AuthProvider";

const App = () => {

    const data = useContext(AuthContext);
    
    
    const [user, setUser] = useState(null)
    
    
    const handleLogin = (email,password)=>{
      if(email == 'admin@123' && password == 123)
      {
        setUser('admin')
      }
      else if(email = 'employee@123' && password == 123)
      {
        setUser('Employee');
      }
      else
      {
        alert("Invalid Input...");
      }
    }
  
  return (
   <>

      
    {!user ? <Login handleLogin = {handleLogin}  /> : ''}
    {user == 'admin' ? <Admin/> : <Employee/>}
      

    </>
  )
}

export default App
