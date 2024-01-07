import {useState} from 'react'

export default function SignUpForm({token, setToken}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState(null);

    async function handleSubmit(event){
        event.preventDefault();
        try{
            if (username.length >= 8) {
                const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
                    method: 'POST',
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                });
                const json = await response.json();
                setToken(json.token);
            } else {
                setFormError("Username is too short. 8 or more characters.");
            }
        } catch (error){
            setFormError(error.message);
        }
    }

    return (
        <>
            <h2>Sign Up</h2>
            {formError && <p>{formError}</p>}
            <form onSubmit= {handleSubmit}>
                <label>
                    Username: <input type= 'username' value= {username} onChange= {(e) => setUsername(e.target.value)}/>
                 </label>
                <label>
                    Password: <input type= 'password' value= {password} onChange= {(e) => setPassword(e.target.value)}/>
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}