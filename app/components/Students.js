import React from 'react';
import { Link } from 'react-router';


export default function Students ({ students }) {

  return (
    <div>
      <h3>Students</h3>
      <div className="list-group">
      {students && students.map(student => {
        return (
          <div className="list-group-item" key={student.id}>
          <Link to={`/students/${student.id}`}>{student.name}</Link>
          </div>
          )
        })
       }
      </div>
      <section>
      <h4>
      <Link className="btn btn-primary btn-block" to="/new-student">
      <span className="glyphicon glyphicon-plus"></span> ADD NEW STUDENT
      </Link>
      </h4>
      </section>
    </div>
  );
}
