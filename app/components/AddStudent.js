import React from 'react';
import Campuses from './Campuses'

export default function NewStudent (props) {

  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const warning = props.warning;
  const inputValue = props.inputValue;

  return (
    <div className="well" style={{marginTop: '20px'}}>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add Student</legend>
          { warning && <div className="alert alert-warning">{warning}</div> }
          <div className="form-group">
            <label className="col-xs-2 control-label">Student Name</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                value={inputValue}
              />
            </div>
          </div>

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
