import { Icon } from "../../shared/svg-icons/Icon"
import "./Dashboard.scss"
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isInHomeRoute = location.pathname.endsWith("dashboard") || location.pathname.endsWith("dashboard/")
  const isInActivityRoute = location.pathname.includes('activity')
  const isInProfileRoute = location.pathname.includes("profile")
  const isInChallengeRoute = location.pathname.includes("challenge")

  return (
    <div className='dashboard'>
      <div className='nav'>
        <span className='logo'>Ipon Challenge</span>
        <div className='right'>
          <span>Keannu John Mellen T. Lacatango</span>
          {/* <img src="#" alt='user' /> */}
          <span className="user"><Icon type="user" /></span>
        </div>
      </div>
      <div className='sidebar'>
        <div className='category'>
          <div className={isInHomeRoute ? 'cat active' : 'cat'} onClick={() => navigate("../dashboard")}>
            <Icon type="home" color={isInHomeRoute ? 'teal' : ''} />
            <span className={isInHomeRoute ? 'active' : ''}>Home</span>
          </div>
          <div className={isInActivityRoute ? 'cat active' : 'cat'} onClick={() => navigate("./activity")}>
            <Icon type="activity" color={isInActivityRoute ? 'teal' : ''} />
            <span className={isInActivityRoute ? 'active' : ''}>Activities</span>
          </div>
          <div className={isInProfileRoute ? 'cat active' : 'cat'} onClick={() => navigate("./profile")}>
            <Icon type="user" color={isInProfileRoute ? 'teal' : ''} />
            <span className={isInProfileRoute ? 'active' : ''}>Profile</span>
          </div>
          <div className={isInChallengeRoute ? 'cat active' : 'cat'} onClick={() => navigate("./challenge")}>
            <Icon type="challenge" color={isInChallengeRoute ? 'teal' : ''} />
            <span className={isInChallengeRoute ? 'active' : ''}>Challenge</span>
          </div>
        </div>
        <div className='logout' onClick={() => navigate("/")}>
          <Icon type="logout" />
          <span>Logout</span>
        </div>
      </div>
      <div className='body'><Outlet /></div>
    </div>
  )
}

export default Dashboard
