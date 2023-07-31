import React from "react";

const Header = ({ state, handleInput, handleClick }) => {
  return (
    <header className="header">
      <h1>Monthly Activity Tracker!</h1>

      <div className="search-bar">
        <form>
          <input
            onChange={handleInput}
            type="text"
            placeholder="e.g. coding"
            value={state.inputText}
          />
          <button onClick={handleClick}>Add Activity</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
