import React from 'react';
import StudentsContainer from '../containers/StudentsContainer';
import { Link } from 'react-router';

export default function Campus (props) {
  const campus = props.selectedCampus;

  return (
    <div className="campus">
      <div>
        <h1>{ campus.name }</h1>
        <img src={ campus.image } className="img-thumbnail"/>
      </div>

      <section>
      <h4>
      <Link className="btn btn-primary btn-block" to="/new">
      <span className="glyphicon glyphicon-plus"></span> DELETE {campus.name}
      </Link>
      </h4>
      </section>

    </div>
  );
}


//<StudentsContainer students={campus.students} />
//problem is we do not have access to students on campus obj rn
