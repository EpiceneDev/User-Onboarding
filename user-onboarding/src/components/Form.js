import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
// Needed: {Name email: "", password: ""} checkbox and submit button

const UserForm = (props) => {
    console.log(props)
    const { values, touched, errors } = props;

    return (
        <>
            <h1>Onboarding Form</h1>
            <Form>
                {/* {props.touched.name && props.errors.name && <p className="error">{props.errors.name}</p>} */}
                {touched.name && errors.name && <p className="error">{errors.name}</p>}
                <Field type="text" name="name" placeholder="Your name here" />
                {touched.email && errors.email && <p className="error">{errors.email}</p>}
                <Field type="email" name="email" placeholder="Your email here" />
                {touched.password && errors.password && <p className="error">{errors.password}</p>}
                <Field type="password" name="password" placeholder="Password" />
                {touched.tos && errors.tos && <p className="error">{errors.tos}</p>}
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
    }),
    handleSubmit: (values, { resetForm, setStatus }) => {
        axios.post('https://reqres.in/api/users', values)
            .then(res => {
                console.log("Post res: ", res);
                setStatus(res);
                resetForm();
            })
            .catch(err => console.log("Post err: ", err))
    }
})(UserForm);

export default FormikForm;