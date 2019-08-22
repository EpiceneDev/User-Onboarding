import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';

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
                <button type="submit">Submit</button>
            </Form> 
        </>
    );
};

//Add validation schema after form looks good
///produces the component that gives the props
const FormikForm = withFormik({
    mapPropsToValues: ({ name, email, password, tos }) => {
        return {
            name: name || "",
            email: email || "", 
            password: password || "",
            tos: tos || false
        }
    },
    validationSchema: yup.object().shape({
        name: yup.string("Name")
            .required("Name is required"),
        email: yup.string()
            .email("Valid email required")
            .required("Need a valid email"),
        password: yup.string()
            .required("password is required")
            .min(4, "Password must be at least 4 characters"),
        tos: yup.boolean()
            .oneOf([true], "Required")
            .required("You must agree to ToS")
    })
})(UserForm);

export default FormikForm;