import React from "react";
import useInput from "../hooks/useInput";

function FormComponent() {
    const [name, handleNameChange, resetName] = useInput("");
    const [email, handleEmailChange, resetEmail] = useInput("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}, Email: ${email}`);
        resetName();
        resetEmail();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={handleNameChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormComponent;
