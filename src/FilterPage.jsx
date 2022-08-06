import React from "react";
import "./FilterPage.css";

const Filter = () => {
  return (
    <aside className="side-bar">
      <div className="check-list">
        <div className="one-category">
          <div className="list-title">PRICE</div>
        </div>
        <div className="checkbox">
          <label htmlFor="radio-1">
            <input type="radio" name="radio" id="radio-1" />
            HIGH TO LOW
          </label>
          <label htmlFor="radio-2">
            <input type="radio" name="radio" id="radio-2" />
            LOW TO HIGH
          </label>
        </div>
        <div className="one-category">
          <div className="check-title">AVAILABILITY</div>
          <div className="checkbox">
            <label htmlFor="checkbox-1">
              <input type="checkbox" id="checkbox-1" name="checkbox" />
              Include Out of Stock
            </label>
            <label htmlFor="checkbox-2">
              <input type="checkbox" id="checkbox-2" name="checkbox" />
              Fast Delivery Only
            </label>
          </div>
        </div>
        <div className="one-category">
          <div className="check-title">BRANDS</div>
          <div className="checkbox">
            <label htmlFor="checkbox-b-0">
              <input type="checkbox" id="checkbox-b-0" name="checkbox" />
              ONEPLUS
            </label>
            <label htmlFor="checkbox-b-1">
              <input type="checkbox" id="checkbox-b-1" name="checkbox" />
              SAMSUNG
            </label>
            <label htmlFor="checkbox-b-2">
              <input type="checkbox" id="checkbox-b-2" name="checkbox" />
              APPLE
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Filter;
