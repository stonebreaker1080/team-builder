import React from 'react';

export default function TeamForm(props) {

    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return(
     <form className='form container' onSubmit={onSubmit}>
        <div className='form-group inputs'>
        <label>Name<input 
            name ="name"
            type = "text"
            placeholder='Please type in your name'
            maxLength="30"
            value = {values.name}
            onChange={onChange}
            />

        </label>
        <label>Email<input 
            name ="email"
            type = "email"
            placeholder='Please type in your email'
            maxLength="30"
            value = {values.email}
            onChange = {onChange}
            />

        </label>
        <label>Role
            <select
            value = {values.role}
            name = "role"
            onChange = {onChange}
            >
                <option value="">-- Select a Role --</option>
                <option value="Manager">Manager</option>
                <option value="Senior Staff">Senior Staff Accountant</option>
                <option value="Staff">Staff Accountant</option>
            </select>
        </label>
        <div className='submit'>
            <button>Submit</button>
        </div>
        </div>
     </form>
    )
}