import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext';


export function Register() {
    const { user, setUser } = useContext(UserContext)
    function handleRegister() {
        const profile = {
            name: "Bingo",
            email: '',
            role: 'User'
        }
        setUser(profile)
        //UserProfile.setName("Proto");
        //console.log(UserProfile.getName())
    }

    return (
        <div className="loginFormWrapper">
            <div className="loginFormContainer">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registration</p>
                <form>
                    <div className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" />
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="text" id="form3Example1q" className="form-control" />
                        <label className="form-label" htmlFor="form3Example1q">Name</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control" />
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control" />
                        <label className="form-label" htmlFor="form2Example2">Repeat password</label>
                    </div>


                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={() => { handleRegister() }}>Register!</button>

                </form>
            </div>
        </div>
    )
}

