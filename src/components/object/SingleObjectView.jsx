import './ComponentsStyles.css'
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext';

export function SingleObjectView() {
  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <div className="objectCard">
        <img className="card-img card-img-top" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/314234927.jpg?k=21291418450e2c1802e02864677b7cf811321797b1d36aaa55e1019133f82698&o=&hp=1" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <NavLink tag={Link} className="text-dark card-link" to="/viewobjects">Atgal</NavLink>
          {user.role === 'Admin' ? <NavLink tag={Link} className="text-dark card-link" to="/editobject">Redaguoti</NavLink> : <></>}
          {user.role === 'Admin' ? <NavLink tag={Link} className="text-dark card-link" to="/viewobjects">Istrinti</NavLink> : <></>}

        </div>
      </div>


      <div className='map'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/bd/Google_Maps_Logo_2020.svg'></img>
      </div>
    </>
  )
}
