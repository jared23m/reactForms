import './App.css'
import SignUpForm from './components/SignUpForm.jsx'
import Authenticate from './components/Authenticate.jsx'
import {useState} from 'react'

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
    <SignUpForm token= {token} setToken= {setToken}/>
    <Authenticate token= {token} setToken= {setToken}/>
    </>
  )
}

export default App
