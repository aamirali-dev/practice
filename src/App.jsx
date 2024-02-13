import { useState } from 'react'
import './App.css'
import MultiSelect from './components/MultiSelect'
import 'bootstrap/dist/css/bootstrap.min.css'
import MultiSelectComponent from './components/MultiSelectComponent'
import Filters from './pages/Filters'
import Login from './pages/login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
        <div className='d-flex gap-3 flex-column'>
          <Login />
        </div>
    </div>
  )
}

export default App
