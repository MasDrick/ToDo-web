import { useState, useEffect } from "react";
import s from "./task.module.scss";
import axios from "axios";

const Index = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  // Функция для обновления состояния и localStorage
  const crossText = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    localStorage.setItem(`task-checked-${props.id}`, newCheckedState);
  };

  // Эффект для инициализации состояния из localStorage
  useEffect(() => {
    const savedState = localStorage.getItem(`task-checked-${props.id}`);
    if (savedState !== null) {
      setIsChecked(JSON.parse(savedState));
    }
  }, [props.id]);

  const deleteTask = async () => {
    try {
      await axios.delete(
        `https://1d9d071e1c37a4f4.mokky.dev/notes/${props.id}`
      );
      localStorage.removeItem(`task-checked-${props.id}`); // Удаляем состояние из localStorage
      props.onDeleteNote(props.id);
    } catch (error) {
      alert("Не удалось удалить задачу:", error.message);
    }
  };

  return (
    <>
      {props.onDeleteNote ? (
        <div className={s.note}>
          <div className={s.task}>
            <label className={s.customCheckbox}>
              <input onChange={crossText} type="checkbox" checked={isChecked} />
              <span className={s.checkmark}></span>
            </label>

            <div className={s.contain}>
              <p className={`${s.text} ${isChecked ? s.checked : ""}`}>
                {props.title}
              </p>
            </div>
          </div>
          <div className={s.tools}>
            <svg
              className={s.iconEdit}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M2 12.66L2 16L5.33 16L12 9.32L14.4 6.93L14.4 6.93C14.73 6.6 14.89 6.43 14.95 6.24C15.01 6.08 15.01 5.9 14.95 5.73C14.89 5.54 14.73 5.37 14.4 5.04L12.95 3.59C12.62 3.26 12.45 3.1 12.26 3.04C12.09 2.98 11.91 2.98 11.75 3.04C11.56 3.1 11.39 3.26 11.06 3.59L11.06 3.59L8.67 5.99L2 12.66ZM8.67 5.99L12 9.32"
                stroke="#CDCDCD"
                strokeOpacity="1"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </svg>

            <svg
              onClick={deleteTask}
              className={s.iconTrash}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip18_285">
                  <rect
                    id="trash-svgrepo-com 1"
                    rx="0.5"
                    width="17"
                    height="17"
                    transform="translate(0.5 0.5)"
                    fill="white"
                    fillOpacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="trash-svgrepo-com 1"
                rx="0.5"
                width="17"
                height="17"
                transform="translate(0.5 0.5)"
                fill="#FFFFFF"
                fillOpacity="0"
              />
              <g clipPath="url(#clip18_285)">
                <path
                  id="Vector"
                  d="M5.36 6L12.63 6C13.5 6 14.19 6.74 14.12 7.61L13.6 14.36C13.54 15.14 12.89 15.75 12.11 15.75L5.88 15.75C5.1 15.75 4.45 15.14 4.39 14.36L3.87 7.61C3.8 6.74 4.49 6 5.36 6Z"
                  stroke="#CDCDCD"
                  strokeOpacity="1"
                  strokeWidth="1"
                />
                <path
                  id="Vector"
                  d="M14.62 3.75L3.37 3.75"
                  stroke="#CDCDCD"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  id="Vector"
                  d="M8.25 1.5L9.75 1.5C10.16 1.5 10.5 1.83 10.5 2.25L10.5 3.75L7.5 3.75L7.5 2.25C7.5 1.83 7.83 1.5 8.25 1.5Z"
                  stroke="#CDCDCD"
                  strokeOpacity="1"
                  strokeWidth="1"
                />
                <path
                  id="Vector"
                  d="M10.5 9L10.5 12.75"
                  stroke="#CDCDCD"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  id="Vector"
                  d="M7.5 9L7.5 12.75"
                  stroke="#CDCDCD"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Index;
