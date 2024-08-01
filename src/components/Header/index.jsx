import { useState } from "react";
import s from "./header.module.scss";

const index = (props) => {
  return (
    <>
      <h1 className={s.title}>todo list</h1>
      <div className={s.input}>
        <input type="text" placeholder="Search note..." />
        <div className={s.verLine}></div>
        <div onClick={props.onClickAdd} className={s.addNote}>
          <svg
            width="11.000000"
            height="11.000000"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Vector"
              d="M10.5 22.48C10.5 22.87 10.65 23.26 10.93 23.54C11.22 23.82 11.6 23.98 12 23.98C12.39 23.98 12.77 23.82 13.06 23.54C13.34 23.26 13.5 22.87 13.5 22.48L13.5 13.48L22.5 13.48C22.89 13.48 23.27 13.33 23.56 13.05C23.84 12.76 24 12.38 24 11.99C24 11.59 23.84 11.21 23.56 10.93C23.27 10.64 22.89 10.49 22.5 10.49L13.5 10.49L13.5 1.49C13.5 1.1 13.34 0.72 13.06 0.43C12.77 0.15 12.39 0 12 0C11.6 0 11.22 0.15 10.93 0.43C10.65 0.72 10.5 1.1 10.5 1.49L10.5 10.49L1.5 10.49C1.1 10.49 0.72 10.64 0.43 10.93C0.15 11.21 0 11.59 0 11.99C0 12.38 0.15 12.76 0.43 13.05C0.72 13.33 1.1 13.48 1.5 13.48L10.5 13.48L10.5 22.48Z"
              fill="#F7F7F7"
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default index;
