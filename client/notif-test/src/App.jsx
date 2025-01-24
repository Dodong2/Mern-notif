import { useState, useEffect } from 'react'
import Axios from 'axios'
import './App.css'

function App() {
  const [userLists, setUserLists] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const userName = (e) => {
    setUsername(e.target.value)
  }

  const userPassword = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
      Axios.get('http://localhost:3003/users/getUser').then((res) => {
        setUserLists(res.data)
      })
  }, [])


  const createUser = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:3003/users/createUser', { username: username, password: password }).then(() => {
      setUserLists([ ...userLists, {username, password}])
      setUsername('')
      setPassword('')

      //notification
      if(Notification.permission === 'granted') {
        new Notification('Success', {
          body: 'User successfully created!',
        })
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            new Notification('Success', {
              body: 'User successfully created!',
            })
          }
        })
      }
    })
    .catch((error) => {
      console.error('Error creating user:',error)
    })
  }

  return (
    <>
      <div>
      {userLists.map((user, index) => (
        <div key={index}>
          <h1>{user.username}</h1>
          <h1>{user.password}</h1><hr/>
        </div>
      ))}
      </div>

      <div>
        <form onSubmit={createUser}>
        <input type='text' value={username} onChange={userName} placeholder='username...'/>
        <input type='text' value={password} onChange={userPassword} placeholder='password...'/>
        <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
