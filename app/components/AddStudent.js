import React from 'react';
import Campuses from './Campuses'
import FormInput from './FormInput';

export default function NewStudent ({handleNameChange, handleEmailChange, handleSubmit, warning, email, name}) {

  return (
    <div className="well" style={{marginTop: '20px'}}>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add Student</legend>
          { warning && <div className="alert alert-warning">{warning}</div> }
          <FormInput handleChange={handleNameChange} inputValue={name} label={"Student Name"} />
          <FormInput handleChange={handleEmailChange} inputValue={email} label={"Student Email"}/>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
      </div>
  );
}

// need to implement later
// <div className="well">
// <form className="form-horizontal" noValidate name="campusSelect" onSubmit={handleSubmit}>
// <fieldset>
// <legend>Add to Campus</legend>
// { error && <div className="alert alert-danger">Student is a duplicate</div> }
// <div className="form-group">
// <label htmlFor="Campus" className="col-xs-2 control-label">Campus</label>
// <div className="col-xs-10">
// <select
// className="form-control"
// name="campus"
// value={campusId}
// required
// onChange={handleChange}>
// {
//   campuses && campuses.map(campus => (
//     <option key={campus.id} value={campus.id}>{campus.name}</option>
//   ))
// }
// </select>
// </div>
// </div>
