import React from 'react'

export default function UserForm(props) {

    const { 
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors

    
    } = props 

    return (
        <form  className = 'form-container' onSubmit={onSubmit} > 
            <h2>Add A User</h2>

        <div className='errors'>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms_of_service}</div>
        </div>


            <label>First Name&nbsp;
                <input
                    value={values.first_name}
                    onChange={onInputChange}
                    name='first_name'
                    type='text'
                />
            </label>

            <label>Last Name&nbsp;
                <input
                    value={values.last_name}
                    onChange={onInputChange}
                    name='last_name'
                    type='text'
                />
            </label>

            <label>Email&nbsp;
                <input
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text'
                />
            </label>

            <label>Password&nbsp;
                <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text'
                />
            </label>

            <label>Terms of Service&nbsp;
                <input
                    value='Agree'
                    checked={values.terms_of_service}
                    onChange={onCheckboxChange}
                    name='terms_of_service'
                    type='checkbox'
                />
            </label>

            <button disabled={disabled}>Submit</button>

        </form>
    )


} 

