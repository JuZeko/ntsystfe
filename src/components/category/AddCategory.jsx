import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export function AddCategory(props){

    return(
        <div className="categoryWrapper">
            <h3>Prideti kategorija</h3>
            <form>
            <div className="form-group">
                    <label className="col-lg-3 control-label">Kategorijos vardas</label>
                    <div className="col-lg-8">
                    <input className="form-control" type="text" value="Namas"/>
                    </div>
            </div>

            <div className="form-group">
                    <label className="col-lg-3 control-label">Kategorijos aprasymas</label>
                    <div className="col-lg-8">
                    <input className="form-control" type="text" value="Aprasymas lorem impum simb bimsup kliumpsu"/>
                    </div>
            </div>
            <button type='button' className='btn-dark'>Prideti</button>
            </form>
            <NavLink tag={Link} className="text-dark card-link" to="/admin/category">Atgal</NavLink>
        </div>
    )
}