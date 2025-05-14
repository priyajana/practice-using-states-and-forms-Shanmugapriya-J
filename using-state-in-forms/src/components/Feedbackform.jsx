/**
 * REFERENCES
 * https://stackoverflow.com/questions/50516966/react-enable-button-after-all-form-fields-are-not-empty
 * https://stackoverflow.com/questions/59835355/get-textarea-character-count-using-reactjs-with-help-of-usestate-hook
 */

import React, { useState } from "react";

export default function Feedbackform(){
    
    const [formData, setFormData] = useState({
         name: "",
        email: "",
        feedback:""
    });
    const [count, setCount] = useState(0);
   
    const handleChange =(e)=>
        {
           
            const { name, value } = e.target; 
            setCount(e.target.name == "feedback"? e.target.value.length:formData.feedback.length);

            setFormData((prevData) => ({
                ...prevData,
                 [name]: value, // Update only the field that matches the input's name
                }));

        }
    function handleSubmit(){
        alert("Your form has been submitted!");
    }
    return(
    <div className="feedback">
                <form>
                            <label>
                                    Name:
                                        <input
                                            type="text"
                                            name="name" // Matches formData key
                                            value={formData.name}
                                            onChange={handleChange}
                                    />
                            </label>
                          
                            <label>
                                    Email:
                                    <input
                                        type="email"
                                        name="email" // Matches formData key
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                            </label>
                            <label>
                           
                                    Feedback:
                                    <textarea
                                        
                                        name="feedback" // Matches formData key
                                        value={formData.feedback}
                                        onChange={handleChange}
                                        maxLength={200}
                                    />
                                     <p>Character limit: {count} / 200</p>
                            </label>
                            
                            <button onClick={handleSubmit}  disabled={!formData.name || !formData.email || !formData.feedback}>Submit</button>

            </form>

                        <h2>Preview</h2>
                        <p>Name: {formData.name}</p>
                        <p>Email: {formData.email}</p>
                        <p>Feedback: {formData.feedback}</p>
    </div>
    );
}