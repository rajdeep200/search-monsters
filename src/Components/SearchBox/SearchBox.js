import React from "react";
import "./SearchBox.css";

function SearchBox({ PlaceHolder, HandleChange}) {
  return (
    <div>
      <input className="search"
        type="search"
        placeholder={PlaceHolder}
        onChange={HandleChange}
      />
    </div>
  );
}

export default SearchBox;
