import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './pages/main/Main'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Activity from './components/activity/activities/Activity'
import Home from './components/home/Home'
import Profile from './components/profile/Profile'
import Details from './components/activity/details/Details'
import Challenge from './components/challenge/Challenge'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path='activity' element={<Activity />}>
            <Route path='details' element={<Details />} />
          </Route>
          <Route path='profile' element={<Profile />} />
          <Route path='challenge' element={<Challenge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
