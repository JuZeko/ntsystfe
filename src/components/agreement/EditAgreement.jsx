import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export function EditAgreement(props) {
    const { user, setUser } = useContext(UserContext)

    console.log(user)
    return (
        <div className="agreementWrapper">
            <h3>Redaguoti sutarti</h3>
            <form>
                <div className="form-group">
                    <label className="col-lg-3 control-label"> Sutartis</label>
                    <div className="col-lg-8">
                        <input className="form-control" type="text" value="Sutartis BHGJ782" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-3 control-label">Pasirase:  </label>
                    <div className="col-lg-8">
                        <input className="form-control" type="text" value="Rom KLj" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-3 control-label">Sudare:  </label>
                    <div className="col-lg-8">
                        <input className="form-control" type="text" value=" Onum Klabu" />
                    </div>
                </div>
                <button type="button" className='btn-dark'>Atnaujinti</button>
            </form>
            <NavLink tag={Link} className="text-dark card-link" to="/agreements">Atgal </NavLink>
        </div>
    )
}