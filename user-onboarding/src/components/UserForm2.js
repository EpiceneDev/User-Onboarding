import React from 'react'
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik"
import * as Yup from 'yup'



const initialValues = {
    users: [
        {
            name: '',
            email: '',
            password: ''
        },
    ],
}
//https://jaredpalmer.com/formik/docs/guides/validation
const UserForm = () => (
    <div>
        <h1>USER ONBOARDING</h1>
        <Formik
            initalvalues={initialValues}
            validationSchema={Yup.object({
                users: Yup.array().of(
                    Yup.object().shape({
                        name: Yup.string().required('Required'),
                        email: Yup.string()
                            .email('Invalid email!')
                            .required('Required')
                        // password: Yup.string()
                        //     .password('9 Character minimum needed')
                        //     .required('Required')
                    })
                ),
            })}
            onSubmit={values => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}
        >
            {({ values, isSubmitting }) => (
                <Form>
                    <FieldArray name="users">
                        {({ push, remove }) => (
                            <>
                                {values.users && 
                                    values.users.length > 0 && 
                                    values.users.map((friend, index) => (
                                        <div>
                                            <div className="row">
                                                <div className="col">

                                                    <Field 
                                                        name={`users[${index}].name`}>
                                                            {({field, form }) => (
                                                                <input 
                                                                    {...field} 
                                                                    type="text" 
                                                                    placeholder="Jane Doe" 
                                                                />
                                                            )}
                                                    </Field>
                                                    <ErrorMessage name={`users[${index}].name`}>
                                                        {msg => <div className="field-error">{msg}</div>}
                                                    </ErrorMessage>  
                                                </div>
                                                <div className="col">
                                                    <Field 
                                                        name={`users[${index}].email`}
                                                        type="email" 
                                                        placeholder="jane@example.com" 
                                                    />
                                                    <ErrorMessage name={`users[${index}].email`}>
                                                        {msg => <div className="field-error">{msg}</div>}
                                                    </ErrorMessage> 
                                                </div>
                                            </div>
                                            <div>
                                                <button 
                                                    type="button" 
                                                    onClick={() => remove(index)}
                                                >Delete</button>
                                            </div>
                                        </div>
                                    ))
                                }
                                <button 
                                    type="button" 
                                    className="secondary" 
                                    onClick={()=> push({ name: '', email: '' })}
                                >Add
                                </button>

                            </>  
                        )}
                    </FieldArray>
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        //onClick={()=> }
                    >Invite
                    </button>  {/*disabled={isSubmitting} can disable a function here because isSubmitted is controlling submit in Form. */}

                    
                </Form>
            )}
        </Formik> 
    </div>
)

export default UserForm