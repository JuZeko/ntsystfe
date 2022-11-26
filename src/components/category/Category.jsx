import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export function Category(props) {
    const { user, setUser } = useContext(UserContext)

    var categoryName = props.props.categoryName
    var description = props.props.categoryDescription
    console.log(user)
    return (
        <div className="categoryWrapper">
            <h3>{categoryName}</h3>
            <hr />
            <p>{description}</p>
            {user.role === "Admin" ? <NavLink tag={Link} type="button" to={`/category/${categoryName}`} className="btn-dark" >Redaguoti</NavLink>
                : <></>}
            {user.role === "Admin" ? <button className='mt-2 btn-dark'>Pasalinti</button>
                : <></>}
        </div>
    )
}