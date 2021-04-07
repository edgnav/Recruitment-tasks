import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const MoreButton = () => {
  return (
    <button className="more-button">
      <div className="more-button-container">
        <div style={{ float: 'left', marginLeft: '16px' }}>More</div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          class="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </button>
  );
};

export default MoreButton;
