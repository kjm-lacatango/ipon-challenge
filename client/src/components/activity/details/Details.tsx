import { useNavigate } from "react-router-dom"
import "./Details.scss"
import { useState } from "react"
import { DetailsTable } from "../../../interfaces"
import { Icon } from "../../../shared/svg-icons/Icon"

const Details = () => {
  const navigate = useNavigate()
  const [showAddPopup, setIsShowAddPopup] = useState<boolean>(false)
  const [showUpdatePopup, setIsShowUpdatePopup] = useState<boolean>(false)
  const [updateDeposit, setUpdateDeposit] = useState<number | null>(null)
  const [lists, setLists] = useState<any[]>([{id: 1}, {id: 2}, {id: 3}, {id: 4}])

  return (
    <div className='details'>
      <div className='details-activity'>
        <div className="details-cont">
          <div className='header'>
            <div className="back" onClick={() => navigate("../")}>
              <Icon type="arrow-left" width={28} height={28} />
            </div>
            <span className="subject">Car</span>
            <div className='status'>
              <span className="status-title">Status:</span>
              <span className="status-data">Pending</span>
            </div>
          </div>
          <img src='#' alt='pic' />
          <div className="info">
            <div className="left">
              <div className="cont amount">
                <span className="title">Current Amount</span>
                <span className="data">₱ 1000000</span>
              </div>
              <div className="cont">
                <span className="title">Update</span>
                <span className="data">1 week ago</span>
              </div>
            </div>
            <div className="right">
              <div className="cont amount">
                <span className="title">Target Amount</span>
                <span className="data">₱ 2000000</span>
              </div>
              <div className="cont">
                <span className="title">Target Date</span>
                <span className="data">None</span>
              </div>
            </div>
          </div>
          <div className="note">
            <span>Note:</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Aut officiis laborum veritatis voluptatum ad ipsa culpa excepturi minima, quidem quae aliquid, 
              id voluptate veniam. Provident minus nulla ipsam maiores magnam!
            </p>
          </div>
          <div className="table-header">
            <span>Deposited</span>
            <span>UpdatedOn</span>
            <span>Category</span>
          </div>
          <div className="table">
            <div className="table-lists scroll">
              {lists.map(list => (
                <div className="table-card">
                  {/* <input type="number" value={updateDeposit} onChange={e => setUpdateDeposit(Number(e.target.value))} /> */}
                  <span>₱ 2000</span>
                  <span>Jan 12, 2024</span>
                  <div className="update-delete">
                    <div className="update">
                      <Icon type="update" width={15} height={15} />
                      <span>Update</span>
                    </div>
                    <div className="delete">
                      <Icon type="delete" width={15} height={15} />
                      <span>Delete</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='category'>
        <div className="options">
          <Icon type="filter" /> 
          <span>Options</span>
        </div>
        <div className="option plus" onClick={() => setIsShowAddPopup(true)}>
          <Icon type="plus" />
          <span>Add</span>
        </div>
        <div className="option update" onClick={() => setIsShowUpdatePopup(true)}>
          <Icon type="update" />
          <span>Update</span>
        </div>
        <div className="option delete">
          <Icon type="delete" />
          <span>Delete</span>
        </div>
      </div>
      {showAddPopup && (
        <div className="popup">
          <form className="card">
            <span className='close' onClick={() => setIsShowAddPopup(false)}><Icon type="close" width={25} height={25} /></span>
            <img src="#" alt="pic" />
            <span className="subject">Car</span>
            <div className="target">
              <div className="amount">
                <span>Current Amount:</span>
                <span className="data">₱ 100000</span>
              </div>
              <div className="amount">
                <span>Deposit:</span>
                <input type="number" />
              </div>
            </div>
            <button className="btn"><Icon type="plus" />Add</button>
          </form>
        </div>
      )}
      {showUpdatePopup && (
        <div className="popup">
          <form className="card card-update">
            <span className='close' onClick={() => setIsShowUpdatePopup(false)}><Icon type="close" width={25} height={25} /></span>
            <img className="pic-update" src="#" alt="pic" />
            <label htmlFor="sub" className="sub">Subject:</label>
            <input className="sub-input" id="sub" />
            <div className="target-update">
              <div className="target-cont">
                <label htmlFor="target-amount">Target Amount:</label>
                <input id="target-amount" />
              </div>
              <div className="target-cont">
                <label htmlFor="date">Target Date:</label>
                <input id='date' type="number" />
              </div>
            </div>
            <div className="others">
              <div className="current-amount">
                <label>Current Amount:</label>
                <span className="data">₱ 200000</span>
              </div>
              <div className="note">
                <label htmlFor="note">Note:</label>
                <textarea id='note' cols={3} rows={3} />
              </div>
            </div>
            <button className="btn"><Icon type="save" />Save</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Details
