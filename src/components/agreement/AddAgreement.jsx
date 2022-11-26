import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export function AddAgreement(props){

    return(
        <div className="agreementWrapper">
        <h3>Prideti sutarti</h3>
        <form>
        <div className="form-group">
                <label className="col-lg-3 control-label"> Sutartis</label>
                <div className="col-lg-8">
                <input className="form-control" type="text" value="Sutartis BHGJ782"/>
                </div>
        </div>

        <div className="form-group">
                <label className="col-lg-3 control-label">Pasirase:  </label>
                <div className="col-lg-8">
                <input className="form-control" type="text" value="Rom KLj"/>
                </div>
        </div>

        <div className="form-group">
                <label className="col-lg-3 control-label">Sudare:  </label>
                <div className="col-lg-8">
                <input className="form-control" type="text" value=" Onum Klabu"/>
                </div>
        </div>
        <button type="button" className='btn-dark'>Prideti</button>
        </form>
        <NavLink tag={Link} className="text-dark card-link" to="/agreements">Atgal </NavLink>
    </div>
    )
}