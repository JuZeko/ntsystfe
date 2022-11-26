import './ComponentsStyles.css'
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


export function EditObject() {

        return (
                <div className='objectWrapper'>
                        <div className='editObjectContainer'>
                                <h3>Redaguoti</h3>
                                <form>
                                        <div className="form-group">
                                                <label className="col-lg-3 control-label"> Kaina</label>
                                                <div className="col-lg-8">
                                                        <input className="form-control" type="text" value="Namas" />
                                                </div>
                                        </div>

                                        <div className="form-group">
                                                <label className="col-lg-3 control-label">Statybos metai </label>
                                                <div className="col-lg-8">
                                                        <input className="form-control" type="text" value="Aprasymas lorem impum simb bimsup kliumpsu" />
                                                </div>
                                        </div>

                                        <div className="form-group">
                                                <label className="col-lg-3 control-label"> Pastato tipas </label>
                                                <div className="col-lg-8">
                                                        <input className="form-control" type="text" value="Aprasymas lorem impum simb bimsup kliumpsu" />
                                                </div>
                                        </div>

                                        <div className="form-group">
                                                <label className="col-lg-3 control-label"> Plotas </label>
                                                <div className="col-lg-8">
                                                        <input className="form-control" type="text" value="Aprasymas lorem impum simb bimsup kliumpsu" />
                                                </div>
                                        </div>

                                        <div className="form-group">
                                                <label className="col-lg-3 control-label">Šildymo  tipas </label>
                                                <div className="col-lg-8">
                                                        <input className="form-control" type="text" value="Aprasymas lorem impum simb bimsup kliumpsu" />
                                                </div>
                                        </div>
                                        <button type='button' className='btn-dark'>Atnaujinti</button>
                                </form>
                                <div className="card-body">
                                        <NavLink tag={Link} className="text-dark card-link" to="/viewobjects">Go back</NavLink>
                                </div>
                        </div>
                </div>
        )
}
