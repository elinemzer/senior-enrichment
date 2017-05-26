import React from 'react';
import { Link } from 'react-router';


export default function Students ({ students }) {

  return (
    <div className="students">
      <h3>All Students</h3>
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
      <Link className="btn btn-primary" to="/new-student">
      <button type="button" className="btn btn-success">ADD NEW STUDENT</button>
      </Link>
      </h4>
      </section>
    </div>
  );
}
