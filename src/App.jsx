import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
      })
      .finally(()=> setLoading(false)) //always executes 
  }, [])

  return !loading ? (
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-white'>
      <div className='w-full block'>
        <Header />
          <main>
            <Outlet/>
          </main>
      </div>
    </div>
    <Footer />
    </>
  ) : (null)

}

export default App
