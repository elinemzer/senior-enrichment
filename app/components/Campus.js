import React from 'react';
import StudentsContainer from '../containers/StudentsContainer';
import { Link } from 'react-router';


export default function Campus (props) {
  const campus = props.selectedCampus;
  const students = props.students;

  const campusStudents = students.filter(student => {
    return +campus.id === +student.campusId
  })

  return (
    <div className="campus">
      <div>
        <h1>{ campus.name }</h1>
        <img src={ campus.image } className="img-thumbnail"/>
      </div>

      <div>
        <h3>All Students Enrolled at {campus.name}</h3>
        <div className="list-group">
        {campusStudents && campusStudents.map(student => {
          return (
            <div className="list-group-item" key={student.id}>
            <Link to={`/students/${student.id}`}>{student.name}</Link>
            </div>
            )
          })
         }
        </div>
      </div>

      <section>
      <h4>
      <Link className="btn btn-primary btn-block" to="/campuses">
      <button type="button" className="btn btn-success">DELETE {campus.name}</button>
      </Link>
      </h4>
      </section>

    </div>
  );
}
