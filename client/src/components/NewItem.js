import React from "react";
function NewItem(props) {
  let { type } = props;
  let itemType = null;

  return (
    <div className="col-8">
      <div className="card">
        <div className="card-header">Title</div>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">Author - Date</h6>
          <h5 className="card-title">Description</h5>
          <p className="card-text">Content</p>

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
