import React from 'react';
import './App.css';
import UserForm from './components/Form';
import { useState } from 'react';
import axios from 'axios'

const intaialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms_of_service: false 
}


function App() {

  const [ formValues, setFormValues ] = useState(intaialFormValues)
  const [ users, addUsers ] = useState([{}])


  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

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





  return (
    <div className="App">
      <header className="App-header">

        <h1>The Users</h1>
        

        <div>
          <UserForm values={formValues} onInputChange={onInputChange} 
          onCheckboxChange={onCheckboxChange} onSubmit={onSubmit}/>
        </div>
      </header>
    </div>
  );
}

export default App;
