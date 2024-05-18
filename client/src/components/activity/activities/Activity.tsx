import { useState } from 'react'
import "./Activity.scss"
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ActivityList } from '../../../interfaces';
import { Icon } from '../../../shared/svg-icons/Icon';

const data: ActivityList[] = [
  {
    id: 1,
    pic: '',
    subject: 'Mercedes Benz',
    targetAmount: 2000000,
    targetDate: new Date('January 12, 2000'),
    status: 'pending',
    currentAmount: 1000000,
    updatedAt: '1 day ago'
  },{
    id: 2,
    pic: '',
    subject: 'iPhone',
    targetAmount: 80000,
    targetDate: new Date('January 12, 2000'),
    status: 'accomplished',
    currentAmount: 80000,
    updatedAt: '1 mon ago'
  },{
    id: 3,
    pic: '',
    subject: 'House',
    targetAmount: 5000000,
    targetDate: new Date('January 12, 2000'),
    status: 'pending',
    currentAmount: 2000000,
    updatedAt: '3 min ago'
  }
]

const Activity = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isShowPopup, setIsShowPopup] = useState<boolean>(false)
  const [isAllActive, setIsAllActive] = useState<boolean>(true)
  const [isPendingActive, setIsPendingActive] = useState<boolean>(false)
  const [isAccomplishedActive, setIsAccomplishedActive] = useState<boolean>(false)
  const [activatedList, setActivatedList] = useState<string>("all")
  const [lists, setLists] = useState<ActivityList[]>(data)
  const [search, setSearch] = useState<string>("")

  const toDetails = () => {
    navigate('details')
  }

  const handleFilter = (category: string) => {
    if (category === 'all') {
      setIsAllActive(true)
      setIsPendingActive(false)
      setIsAccomplishedActive(false)
    } else if (category === 'pending') {
      setIsAllActive(false)
      setIsPendingActive(true)
      setIsAccomplishedActive(false)
    } else {
      setIsAllActive(false)
      setIsPendingActive(false)
      setIsAccomplishedActive(true)
    }

    setActivatedList(category)

    if (category === 'all') {
      setLists([{
        id: 1,
        pic: '#',
        subject: 'Mercedes Benz',
        targetAmount: 2000000,
        targetDate: new Date('January 12, 2000'),
        status: 'pending',
        currentAmount: 1000000,
        updatedAt: '1 day ago'
      },{
        id: 2,
        pic: '',
        subject: 'iPhone',
        targetAmount: 80000,
        targetDate: new Date('January 12, 2000'),
        status: 'accomplished',
        currentAmount: 80000,
        updatedAt: '1 mon ago'
      },{
        id: 3,
        pic: '',
        subject: 'House',
        targetAmount: 5000000,
        targetDate: new Date('January 12, 2000'),
        status: 'pending',
        currentAmount: 2000000,
        updatedAt: '3 min ago'
      }])
    }
  }

  const handleEnterSearch = (e?: React.KeyboardEvent<HTMLInputElement>) => {
    if (search.trim() !== "" && e?.key.toLowerCase() === "enter") {
      console.log(search)
    }
  }

  const handleClickSearch = () => {
    console.log(search)
  }

  const filteredLists = activatedList === 'all' ? lists : lists.filter(list => list.status === activatedList)

  const isInDetails = location.pathname.includes("details")
  if (isInDetails) return <Outlet />

  return (
    <div className='activity'>
      <div className='activity-lists'>
        <div className='headers'>
          <div className="search">
            <input placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} onKeyUp={e => handleEnterSearch(e)} />
            <span className='icon' onClick={handleClickSearch}><Icon type="search" /></span>
          </div>
          <span>{isAllActive ? 'All' : isPendingActive ? 'Pending' : 'Accomplished'}</span>
          <div className="btn">
            <button onClick={() => setIsShowPopup(true)}><Icon type="plus" />Add Subject</button>
          </div>
        </div>
        <div className='lists scroll'>
          {filteredLists.map(list => (
            <div key={list.id} onClick={toDetails} className='card'>
              {list.pic && <img src={list.pic} alt="pic" />}
              <div className='activity-title'>
                <span className='subject'>{list.subject}</span>
                <div className='target'>
                  <div className="target-data line">
                    <span className='title'>Target Amount</span>
                    <span className="data">₱ {list.targetAmount}</span>
                  </div>
                  <div className="target-data">
                    <span className='title'>Target Date</span>
                    <span className="data">{list.targetDate ? list.targetDate.toDateString() : "None"}</span>
                  </div>
                </div>
              </div>
              <div className='activity-data'>
                <span>Current Amount: <strong>₱ {list.currentAmount}</strong></span>
                <span>Updated: <strong>{list.updatedAt}</strong></span>
              </div>
            </div>
          ))}
          <div className='end-lists'>- - - END - - -</div>
        </div>
      </div>
      <div className='filter'>
        <div className='category'>
          <Icon type="filter" />
          <span>Filter Category</span>
        </div>
        <span className={isAllActive ? 'cat active-all' : 'cat all'} onClick={() => handleFilter('all')}>
          <span className="tag">*</span>All
        </span>
        <span className={isPendingActive ? 'cat active-pen' : 'cat pen'} onClick={() => handleFilter('pending')}>
          <Icon type="pending" width={20} height={20} /> Pending
        </span>
        <span className={isAccomplishedActive ? 'cat active-acc' : 'cat acc'} onClick={() => handleFilter('accomplished')}>
          <Icon type="accomplished" /> Accomplished
        </span>
      </div>

      {isShowPopup && (
        <div className="popup">
          <div className="card">
            <span className='close' onClick={() => setIsShowPopup(false)}>
              <Icon type="close" height={27} width={27} />
            </span>
            <div className="upload">
              <Icon type="picture" width={65} height={65} />
              <span>(optional) Upload</span>
            </div>
            <label htmlFor='sub'>Subject:</label>
            <input id='sub' />
            <div className="target">
              <div className="amount">
                <label htmlFor='amount'>(optional) Target Amount:</label>
                <input type="number" id="amount" />
              </div>
              <div className="date">
                <label htmlFor="date">(optional) Target Date:</label>
                <input type="date" id="date" />
              </div>
            </div>
            <div className="note">
              <label htmlFor="note">(optional) Note:</label>
              <textarea id="note" cols={3} rows={3} />
            </div>
            <button className='add-btn'><Icon type="plus" />Add</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Activity
