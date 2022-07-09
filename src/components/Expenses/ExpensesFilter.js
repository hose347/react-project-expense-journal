import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expenses-filter__control">
        <label className="expenses-filter__label">Filter by year </label>
        <select
          value={props.selected}
          onChange={dropdownChangeHandler}
          type="submit"
          className="expenses-filter select"
        >
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
