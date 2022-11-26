import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext';
import { Agreement } from "../agreement/Agreement";

export function ViewAgreements() {
    const { user, setUser } = useContext(UserContext)
    const fake = {
        categoryName: "Butas",
        categoryDescription: "Bla lorem impum kra bas mala si mapo ghja uolkwma yo"
    }

    const fake1 = {
        categoryName: "Namas",
        categoryDescription: "Bla lorem impum kra bas mala si mapo ghja uolkwma yo"
    }

    return (
        <div>
            <h3>Sutartys</h3>
            {user.role === 'Admin' ? <NavLink tag={Link} className="text-dark card-link" to="/addagreement">Sukurti sutarti</NavLink> : <></>}
            <div className="agreementsContainer">
                <div className="agreementsWrapper">
                    <Agreement />
                    <Agreement />

                </div>
            </div>
        </div>
    )
}