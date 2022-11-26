import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export function Agreement(props) {
    const { user, setUser } = useContext(UserContext)

    var bla = "hjkhk"
    console.log(user)
    return (
        <div className="agreementWrapper">
            <h3>Sutartis BHGJ782</h3>
            <hr />
            <p>Pasirase : Rom KLj</p>
            <p>Sudare : Onum Klabu</p>
            <NavLink tag={Link} type="button" to={`/agreements/singleagreement`} className="btn-dark" >Perziureti</NavLink>
        </div>
    )
}