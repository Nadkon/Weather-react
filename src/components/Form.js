import React from "react";

export default function Form() {
  return (
    <form className="mb-2">
      <div className="row">
        <div className="col-5">
          <input
            type="search"
            placeholder="Type a city name..."
            className="form-control"
            autoComplete="off"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Current location"
            className="btn btn-info w-30 current-location-btn"
          />
        </div>
      </div>
    </form>
  );
}
