import React from 'react';
import Campuses from './Campuses'
import FormInput from './FormInput';

export default function NewStudent ({handleNameChange, handleEmailChange, handleSubmit, warning, email, name, campuses}) {

//was working on getting the dropdown menu of campuses working when time ran out.
  return (
    <div className="well" style={{marginTop: '20px'}}>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add Student</legend>
          { warning && <div className="alert alert-warning">{warning}</div> }
          <FormInput handleChange={handleNameChange} inputValue={name} label={"Student Name"} />
          <FormInput handleChange={handleEmailChange} inputValue={email} label={"Student Email"}/>
          {
            campuses && campuses.map(campus => (
              <option key={campus.id} value={campus.id}>{campus.name}</option>
            ))
          }
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
      </div>

  )
}


//
// {
//   campuses && campuses.map(campus => (
//     <option key={campus.id} value={campus.id}>{campus.name}</option>
//   ))
// }
