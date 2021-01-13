import React from "react";
import formatDate from '../utils/date'

function NewItem(props) {
  let { type } = props;

  return (
    <div className="col-8">
      <div className="card">
        <div className="card-header">{props.new.title}</div>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            
            {props.new.author} - {formatDate(props.new.date)}
          
          </h6>
          <h5 className="card-title">{props.new.description}</h5>
          <p className="card-text">{props.new.content}</p>

          <button
            href="#"
            className={`btn ${type === "news" ? "btn-primary" : "btn-danger"}`}
            onClick={() => props.action(props.id)}
          >
            {type === "news" ? "Archive new" : "Remove new"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewItem;
