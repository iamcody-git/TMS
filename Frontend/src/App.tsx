import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import CreateTask from './Pages/Task/CreateTask'
import EditTask from './Pages/Task/EditTask'
import Home from './Pages/Task/Home'
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={< Login/>}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/task/add' element={<CreateTask/>} />
      <Route path='/task/edit' element={< EditTask/>} />
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
