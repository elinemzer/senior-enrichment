import React from 'react';

const FormInput = ({handleChange, inputValue, label}) =>{
  return (
    <div className="form-group">
      <label className="col-xs-2 control-label">{label}</label>
      <div className="col-xs-10">
        <input
          className="form-control"
          type="text"
          onChange={handleChange}
          value={inputValue}
        />
      </div>
    </div>
  );
}

export default FormInput;
