import React from 'react';
import { Link } from 'react-router'


export default function Student(props){
  const student = props.selectedStudent;
  const students = props.students;
  const deleteStudent = props.deleteStudent;
  const campus = props.campus;

  // const campusName = campuses.filter(campus => {
  //   return +student.campusId === +campus.id
  // })
//the whole thing needs to go in there? because it just printed the correct name in the console...
  // console.log(campusName[0] ? campusName[0].name : 'hah')

  return (
   <div className="student">
    <div>
      <h1>{ student.name } </h1>
      <h4>{ student.email }</h4>
    </div>

    <section>
    <Link to={`/campuses/${student.campusId}`}>{campusName[0] ? campusName[0].name : ''}</Link>
    </section>
    <section>
    <h4>
    {
      students && students.map(student =>
        <Link className="btn btn-primary btn-block" to="/students">
        <button type="button" className="btn btn-success" onClick={() => deleteStudent(student)}>DELETE {student.name}</button>
        </Link>
      )
    }
    </h4>
    </section>
   </div>
  )
}
