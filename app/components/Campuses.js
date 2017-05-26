import React from 'react';
import { Link } from 'react-router';

export default function Campuses ({ campuses }) {

  return (
    <div>
      <h3>All Campuses</h3>
      <div className="list-group">
        {campuses && campuses.map( campus => {
          return (
            <div className="list-group-item" key={campus.id}>
            <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
            </div>
          )
        })
      }
      </div>
      <section>
      <h4>
      <Link className="btn btn-primary btn-block" to="/new-campus">
      <button type="button" className="btn btn-success">ADD NEW CAMPUS</button>
      </Link>
      </h4>
      </section>
    </div>

  )}
