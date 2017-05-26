import React from 'react';
import Campuses from './Campuses';
import FormInput from './FormInput';

export default function NewCampus ({handleNameChange, handleImageChange, handleSubmit, warning, name, image}) {

  return (
    <div className="well" style={{marginTop: '20px'}}>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add Campus</legend>
          { warning && <div className="alert alert-warning">{warning}</div> }
          <FormInput handleChange={handleNameChange} inputValue={name} label={"Campus Name"} />
          <FormInput handleChange={handleImageChange} inputValue={image} label={"Campus Image"}/>
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
