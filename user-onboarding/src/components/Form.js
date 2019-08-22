import React from 'react';
import { withFormik, Form, Field } from 'formik';

// Needed: {Name email: "", password: ""} checkbox and submit button

const UserForm = (props) => {
    return (
        <h1>Onboarding Form</h1>
      <Form>
        <Field type="text" name="name" placeholder="Your name here" />
        <Field type="email" name="email" placeholder="Your email here" />
        <Field type="password" name="password" placeholder="Password" />
      </Form> 
    );
};

       
///produces the component that gives the props
const withFormik({
    mapPropsToValues: ({ name, email, password }) => {
        name: name || "",
        email: email || "", 
        password: password || ""
    }
})(UserForm);

export default UserForm;