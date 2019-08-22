import React from 'react';
import { withFormik, Form, Field } from "formik";

// Needed: {Name email: "", password: ""} checkbox and submit button

const Form() {
    return (
        <div className = "loginForm" >{ console.log(user) }
            <Form onSubmit = { event => handleSubmit(event) } >
                <Label>Username:
                    <input type = "text"
                        name = "username"
                        onChange = { event => handleChange(event) }
                    /> 
                </Label> 
                <Label>Password:
                    <input type = "text"
                    name = "password"
                    onChange = { event => handleChange(event) }
                    />
                </Label>
                <button> Submit! </button> 
            </Form> 
        </div>
    );
    );
};

export default Form;