import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


function Auth(){

    const [isLogin, setIsLogin] = useState(false); 
    const navigate = useNavigate();     

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //  GOOGLE LOGIN SUCCESS
    const handleGoogleSuccess = (credentialResponse) => {
        try {
            const decoded = jwtDecode(credentialResponse.credential);

            console.log("Google User:", decoded);

            // store user
            localStorage.setItem("user", JSON.stringify(decoded));

            // redirect
            navigate('/dashboard');


        } catch (err) {
            console.log("Error decoding token", err);
        }
    };

    const handleGoogleError = () => {
        console.log("Google Login Failed");
    };

    // NORMAL LOGIN / SIGNUP
    const handleSubmit = (e) => {
        e.preventDefault();     

        if(isLogin){
            console.log("Logging in with:", { email, password });

            // save user
            localStorage.setItem("user", JSON.stringify({ email }));

        } else {
            console.log("Signing up with:", { name, email, password });

            localStorage.setItem("user", JSON.stringify({ name, email }));
        }

        navigate('/MainContent');
    };

    const toggleMode = () => {
        setIsLogin(!isLogin);
    }

    return(
        <div style={{textAlign:'center'}}>
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>

            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <div> 
                      <label>Name : </label>
                       <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />    
                    </div>
                )}

                <div>
                    <label>Email : </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Password : </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">
                    {isLogin ? "Login"  : "Sign Up"}
                </button>
            </form>

            <p>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button type="button" onClick={toggleMode}>
                    {isLogin ? "Sign Up" : "Login"}
                </button>
            </p>

            {/*  GOOGLE LOGIN BUTTON */}
            <div style={{marginTop:"20px"}}>
                <h3>OR</h3>

                <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleError}
                />
            </div>

        </div>
    )
}

export default Auth;
