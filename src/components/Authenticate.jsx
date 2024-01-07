import {useState} from 'react'

export default function Authenticate({token, setToken}){
    const [successMessage, setSuccessMessage] = useState(null);
    const [dataIAT, setDataIAT] = useState(null);
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
            setDataIAT(json.data.iat);
        } catch (error) {
            setAuthError(error.message);
        }
    }
    
    return (
        <>
            <h2>Authenticate</h2>
            {(successMessage === "jwt malformed") && <p>Error: {successMessage}</p>}
            {(successMessage === "Correctly Authenticated!") && <p>{successMessage}</p>}
            {(successMessage === "Correctly Authenticated!") && <p>Data IAT: {dataIAT}</p>}
            <button onClick= {handleClick}>Authenticate Token</button>
        </>
    )
}