import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import { withFormik, Form, Field, setNestedObjectValues } from 'formik'
import * as yup from 'yup'
import styled from 'styled-components'

const labels = styled.label`
    background-color: yellow;
    radius: 3px;
`

const fields = styled.label`
    background-color: yellow;
    radius: 3px;
`

const UserForm = ({ 
    values, 
    errors,
    touched,
    status
}) => {
    const [user, setUser] = useState([])  //adding so we can see the state after submit but not needed for form.
    useEffect(() => {
        if(status) {
            setUser([...user, status])
        }
    }, [user, status])
    return (
        <Form className="form">
            <h1>USER-ONBOARDING</h1>
            <labels>Name
                <br />
                { touched.name && errors.name && <p>{errors.name}</p> } 
                <Field name="name" type="name" />
            </labels>
               
            <labels>Email
                <br />
                { touched.email && errors.email && <p>{errors.email}</p> }   {/*This is the validation*/}
                <Field type="email" name="email" placeholder="Email"  />
            </labels>
            {/* <label>
                { touched.password && errors.password && <p>{errors.password}</p> }
                <Field type="password" name="password" placeholder="Password"  />
            </label> */}
             <label>TOS<br/>I agree to let this company have all of my private information, regardless.
                <Field component="select" name="agreement">
                    <option value="I agree to your TOS">Agree</option>
                    <option value="I do not agree with your TOS">Disagree</option>

                </Field>
            </label>  
                <button>Join us!</button>
        </Form>
    )}

const FormikUserForm = withFormik({
        mapPropsToValues({ email, password, newsletter, plan, notes }) {
            return {
                email: email || '',
                password: password || '',
                newsletter: newsletter || false,
                plan: plan || 'free',
                notes: notes || ''
            }
        },
        validationSchema: yup.object().shape({
            email: yup.string().email().required("You must have an email."),
            password: yup.string().min('9').required("Minimum 9 letters please.")
        }),
        
        handleSubmit(values, { setStatus }) {
            console.log("values: ", values);
            setNestedObjectValues(values);
            //get/post api's here
            // axios   
            //     .post("https://reqres.in/api/users/", values)
            //     .then(res => {
            //         console.log("POST res", res);
            //         setNestedObjectValues(res.data);
            //     })
            //     .catch(err => console.log("ERROR API", err))
        }   
})(UserForm)

console.log('This is the HOC', FormikUserForm)

export default FormikUserForm


render(<FormikUserForm name="" email="" password="" />, document.getElementById('root'))

