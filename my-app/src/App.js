import React from 'react';
import './App.css';
import UserForm from './components/Form';
import { useState, useEffect } from 'react';
import axios from 'axios'
import formSchema from './validation/formSchema';
import * as yup from 'yup'

const intaialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms_of_service: false 
}

const initalFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms_of_service: '',
}
const intialDisabled = true 


function App() {

  const [ formValues, setFormValues ] = useState(intaialFormValues)
  const [ users, addUsers ] = useState([])
  const [ disabled, setDisabled ] = useState(intialDisabled)
  const [ formErrors, setFormErrors ] = useState(initalFormErrors)


  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]:err.errors[0]
      })
    })

    setFormValues({
      ...formValues, [name]:value
    })
  }

  const onCheckboxChange = evt => {

    const name = evt.target.name
    const checked = evt.target.checked

    setFormValues({
      ...formValues, [name]: checked
    })
  }


  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      addUsers([res.data, ...users])
      console.log(users)
    })
    .catch(err => {
      debugger
    })
    .finally(() => {
      setFormValues(intaialFormValues)
    })
  
  }

  const onSubmit = evt => {

    evt.preventDefault()

    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms_of_service: formValues.terms_of_service
    }

    postNewUser(newUser)
  }

  useEffect(() => {
    formSchema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])







  return (
    <div className="App">
      <header className="App-header">
        <div>
          <UserForm values={formValues} onInputChange={onInputChange} 
          onCheckboxChange={onCheckboxChange} onSubmit={onSubmit}
          disabled={disabled} errors={formErrors}/>
        </div>

    <div className='users'>
          {
             JSON.stringify(users)
             
          }
    </div>

      </header>
    </div>
  );
}

export default App;
