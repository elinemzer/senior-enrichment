import React from 'react';
import { Link } from 'react-router'


export default function Student(props){
  const student = props.selectedStudent;

  return (
   <div className="student">
    <div>
      <h1>{ student.name } </h1>
      <h4>{ student.email }</h4>
      <Link to={`/campuses/${student.campusId}`}>{student.campusId}</Link>
    </div>
    <section>
    <h4>
    <Link className="btn btn-primary btn-block" to="/students">
    <span className="glyphicon glyphicon-plus"></span> DELETE {student.name}
    </Link>
    </h4>
    </section>
   </div>
  )
}
