import { useState } from "react";
import axios from "axios";

import s from "./note.module.scss";

const index = (props) => {
  const [inputValue, setInputValue] = useState("");

  const noteAdd = (e) => {
    setInputValue(e.target.value);
  };

  const noteApply = () => {
    props.onAddNote(inputValue); // Используем функцию из пропсов
    setInputValue("");
    props.closePopUp(); // Закрываем PopUp после добавления заметки
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      noteApply(); // Вызываем функцию при нажатии Enter
    }
  };

  return (
    <>
      <div className={`${s.overlay} ${props.noteOpen ? s.overlayVisible : ""}`}>
        <div className={s.popUp}>
          <div className={s.container}>
            <div className={s.wrapper}>
              <h1>New Note</h1>
              <input
                value={inputValue}
                onChange={noteAdd}
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="Input your note..."
              />
            </div>
            <div className={s.btns}>
              <button onClick={() => props.closePopUp()} className={s.cansel}>
                canсel
              </button>
              <button onClick={noteApply}>apply</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
