import {useState} from 'react'

export default function Authenticate({token, setToken}){
    const [successMessage, setSuccessMessage] = useState(null);
    const [authError, setAuthError] = useState(null);

    async function handleClick(){
        try{
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
            { 
            method: "GET", 
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            }
            })
            const json = await response.json();
            setSuccessMessage(json.message);
        } catch (error) {
            setAuthError(error.message);
        }
    }
    
    return (
        <>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {authError && <p>{authError}</p>}
            <button onClick= {handleClick}>Authenticate Token</button>
        </>
    )
}