import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'


export function EditCategory(props) {
    const { user, setUser } = useContext(UserContext)


    return (
        <div className="categoryWrapper">
            <h3>Redaguoti kategorija</h3>
            <form>
                <div className="form-group">
                    <label className="col-lg-3 control-label">Kategorijos vardas</label>
                    <div className="col-lg-8">
                        <input className="form-control" type="text" value="Namas" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-3 control-label">Kategorijos aprasymas</label>
                    <div className="col-lg-8">
                        <input className="form-control" type="text" value="Aprasymas lorem impum simb bimsup kliumpsu" />
                    </div>
                </div>
                <button type="button" className='btn-dark'>Atnaujinti</button>
            </form>
            <NavLink tag={Link} className="text-dark card-link" to="/admin/category">Atgal </NavLink>
        </div>
    )
}