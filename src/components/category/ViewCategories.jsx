import { Category } from "../category/Category"
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export function Categories() {
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
            <h3>Kategorijos</h3>
            <NavLink tag={Link} className="text-dark card-link" to="/addcategory">Sukurti kategoriją</NavLink>
            <div className="objectsContainer">
                <div className="objectsWrapper">
                    <Category props={fake} />
                    <Category props={fake1} />

                </div>
            </div>
        </div>
    )
}