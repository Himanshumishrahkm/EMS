import { useState } from "react";

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const FormHandler = (e)=>{
    e.preventDefault();

    console.log('email',email);
    console.log('password',password);

    setEmail('');
    setPassword('');
    
    
  }
  return (
    <div className="h-screen w-screen bg-gray-500">
      <div className="flex h-full items-center justify-center ">
        
        <form
        onSubmit={(e)=>{
          FormHandler(e);
        }}
        className="bg-gray-400 p-11 h-[40%] w-[30%] flex flex-col rounded-4xl justify-center items-center gap-3 outline-none border-2 border-black ">
          <h1 className="text-3xl">LOGIN</h1>
          <input required
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
          className="outline-none border-2 w-[90%] p-2 rounded-3xl text-2xl" type="Email" id="" placeholder="Your Email"/>
          <input required
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
          className="outline-none border-2 w-[90%] p-2 rounded-3xl text-2xl" type="password"  placeholder="Your Password" />
          <div className="flex w-full justify-center ">
          <button required className="mt-3 w-[30%] text-black bg-gray-700 outline-none  p-2 rounded-3xl active:bg-gray-800 " >Log In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
