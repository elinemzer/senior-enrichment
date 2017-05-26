import React from 'react';
import { Link } from 'react-router'


export default function Student(props){
  const student = props.selectedStudent;
  const students = props.students;
  // const deleteStudent = props.deleteStudent;
  const campuses = props.campuses;

  const campusName = campuses.filter(campus => {
    return +student.campusId === +campus.id
  })

  return (
   <div className="student">
    <div>
      <h1>{ student.name } </h1>
      <h4>{ student.email }</h4>
    </div>

    <div>
    <h3> { student.name } is assigned to: </h3>
    <div className="list-group">
    {campusName && campusName.map(campus => {
      return (
        <div className="list-group-item" key={campus.id}>
        <Link to={`/campuses/${student.campusId}`}>{campus.name}</Link>
        </div>
      )
    })
   }
   </div>
  </div>

  <section>
  <h4>
  <Link className="btn btn-primary btn-block" to="/students">
  <button type="button" className="btn btn-success">DELETE {student.name}</button>
  </Link>
  </h4>
  </section>
   </div>
  )
}

// <section>
// <Link className="btn btn-primary btn-block" to="/students">
// <button type="button" className="btn btn-success">DELETE {student.name}</button>
// </Link>
// </section>
