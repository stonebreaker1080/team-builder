import './App.css';
import TeamForm from './TeamForm'
import React, {useState} from 'react';
import Member from './Member'


const initialFormValues = {
  name: "",
  email: "",
  role: ""
}

function App() {

  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName , inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    setTeamMembers(teamMembers.concat(newMember))
    setFormValues(initialFormValues)
  }

  return (
    <div className="container">
        <h1>Team Members</h1>
        <TeamForm 

        values = {formValues}
        update = {updateForm}
        submit = {submitForm}

        
        
        
        />
      {teamMembers.map((member, index) => {
        return (
          <Member key ={index} details={member}/>
        )
      })}
    
    </div>


   
  );
}

export default App;
