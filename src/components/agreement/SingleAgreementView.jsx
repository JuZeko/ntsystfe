import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export function SingleAgreement(props) {
    const { user, setUser } = useContext(UserContext)

    console.log(user)
    return (
        <div className="agreementWrapper">
            <h3>Sutartis BHGJ782</h3>
            <hr />
            <p>Pasirase : Rom KLj</p>
            <p>Sudare : Onum Klabu</p>
            {user.role === "Admin" ? <NavLink tag={Link} type="button" to="/agreements" className="btn-dark" >Trinti</NavLink>
                : <></>}
            {user.role === "Admin" ? <NavLink tag={Link} type="button" to="/agreements/editagreement" className="btn-dark" >Redaguoti</NavLink>
                : <></>}
        </div>
    )
}