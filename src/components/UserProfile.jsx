import { useContext } from 'react'
import { UserContext } from '../Context/UserContext';

export function UserProfile(){
    const {user, setUser} = useContext(UserContext)
    return(
    <div>
    <div className="loginFormWrapper">
            <div className="loginFormContainer">
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Your profile</p>
                <form>
                <div className="form-group">
                    <label className="col-lg-3 control-label">First name:</label>
                    <div className="col-lg-8">
                    <input className="form-control" type="text" value={user.name}/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-3 control-label">Last name:</label>
                    <div className="col-lg-8">
                    <input className="form-control" type="text" value="UserL"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-lg-3 control-label"> Email:</label>
                    <div className="col-lg-8">
                    <input className="form-control" type="email" value="UserLUser@email.com"/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-3 control-label">Password</label>
                    <div className="col-lg-8">
                    <input className="form-control" type="password" value="psw"/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-3 control-label">Repeat password:</label>
                    <div className="col-lg-8">
                    <input className="form-control" type="password" value="psq"/>
                    </div>
                </div>


                <button type="button" className="btn btn-primary btn-block mb-4" onClick={()=>{handleRegister()}}>Update information!</button>

                </form>
            </div>
        </div>
     </div>
    )
}