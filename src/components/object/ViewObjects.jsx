import { Object } from "./Object"
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react'

export function ViewObjects() {
    const { user, setUser } = useContext(UserContext)

    return (
        <div>
            <h3>Objektu sarasas</h3>
            {user.role === "Admin" ? <NavLink tag={Link} className="text-dark card-link" to="/addobject">Prideti objekta</NavLink> : <></>}
            <div className="objectsContainer">
                <div className="objectsWrapper">
                    <Object />
                    <Object />
                    <Object />
                    <Object />
                    <Object />
                    <Object />
                    <Object />
                    <Object />
                    <Object />

                </div>
            </div>
        </div>
    )
}