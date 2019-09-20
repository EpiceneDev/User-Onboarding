import React from 'react'
import { Form, Field } from 'formik'

const UserForm = ({
    values,
    errors, 
    touched,
    status
}) => {
    return (
        <legend>WELCOME!
            <Form className="form">
                <label>Name
                    <br/>
                    { touched.name && errors.name && <p>{errors.name}</p> } 
                    <Field name="name" type="name" {...props} />
                </label>
                <label>Email
                    <br/>
                    { touched.email && errors.email && <p>{errors.email}</p> } 
                    { touched.password && errors.password && <p>{errors.password}</p> }
                    <Field name="email" type="email" {...props} />
                </label>
                <label>Password
                    <br/>
                    { touched.password && errors.password && <p>{errors.password}</p> }
                    <Field name="password" type="password" {...props} />
                </label>
                <button>Join us!</button>
            </Form>
        </legend>
    )}

export default UserForm