import AllTask from '../../pages/AllTask'
import CreateTask from '../../pages/CreateTask'
import Header from '../../pages/Header'

const Admin = () => {
  return (
    <div className="h-screen w-full bg-black">
      <Header/>
       <CreateTask/>
       <AllTask/>
    </div>
  )
}

export default Admin
