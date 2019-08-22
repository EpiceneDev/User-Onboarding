import React from 'react';
import { withFormik, Form, Field } from 'formik';

// Needed: {Name email: "", password: ""} checkbox and submit button

const UserForm = (props) => {
    console.log(props)
    return (
        <>
            <h1>Onboarding Form</h1>
            <Form>
                <Field type="text" name="name" placeholder="Your name here" />
                <Field type="email" name="email" placeholder="Your email here" />
                <Field type="password" name="password" placeholder="Password" />
                <label>
                    <Field type="checkbox" name="tos" />
                    I agree with the Terms of Service
                </label>
            </Form> 
        </>
    );
};

       
///produces the component that gives the props
const FormikForm = withFormik({
    mapPropsToValues: ({ name, email, password }) => {
        return {
            name: name || "",
            email: email || "", 
            password: password || ""
        }
    }
})(UserForm);

export default FormikForm;