import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserForm2 from './components/UserForm2'

function App() {
    return ( 
        <div className = "App" >
           <UserForm />
           <UserForm2 />
        </div>
    );
}

export default App;