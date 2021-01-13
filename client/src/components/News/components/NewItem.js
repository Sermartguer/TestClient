import React from "react";
function NewItem() {
  return (
    <div className="col-8">
      <div className="card">
        <div className="card-header">Title</div>
        <div className="card-body">
          <h6 class="card-subtitle mb-2 text-muted">Author - Date</h6>
          <h5 className="card-title">Description</h5>
          <p className="card-text">Content</p>
          <a href="#" className="btn btn-primary">
            Archive new
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewItem;
