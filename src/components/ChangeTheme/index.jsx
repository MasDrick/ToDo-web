import { useEffect, useState } from "react";
import s from "./theme.module.scss";
import axios from "axios";

const index = () => {
  const [theme, setTheme] = useState("");
  const [changeIcon, setChangeIcon] = useState(Boolean);

  const changeTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      setChangeIcon(newTheme === "dark"); // Обновляем changeIcon в зависимости от новой темы

      axios.patch("https://1d9d071e1c37a4f4.mokky.dev/theme/", [
        {
          color: newTheme,
        },
      ]);

      return newTheme;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://1d9d071e1c37a4f4.mokky.dev/theme");
        setTheme(res.data[0].color);
        setChangeIcon(res.data[0].color === "dark"); // Устанавливаем changeIcon сразу после получения данных
        // console.log(res.data.color);
      } catch (error) {
        console.error("Error fetching data:", error); // Обработка ошибок
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const root = document.querySelector(":root");

    const components = ["body-bg", "color", "text-color"];

    components.forEach((obj) => {
      root.style.setProperty(`--${obj}-default`, `var(--${obj}-${theme})`);
    });
  }, [theme]);

  return (
    <>
      <div onClick={changeTheme} className={s.containerTheme}>
        {changeIcon ? (
          <svg
            width="22"
            height="22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.15 1.15C12.15.51 11.63 0 11 0c-.64 0-1.16.51-1.16 1.15v.58c0 .64.52 1.16 1.16 1.16.63 0 1.15-.52 1.15-1.16v-.58Zm6.62 3.7c.46-.45.46-1.18 0-1.63-.45-.46-1.18-.46-1.63 0l-.41.41c-.46.45-.46 1.18 0 1.64.45.45 1.18.45 1.63 0l.41-.42ZM4.85 3.22c-.45-.46-1.18-.46-1.63 0-.46.45-.46 1.18 0 1.63l.41.42c.45.45 1.18.45 1.63 0 .46-.46.46-1.19 0-1.64l-.41-.41Zm-3.7 6.62C.51 9.84 0 10.36 0 11c0 .63.51 1.15 1.15 1.15h.58c.64 0 1.16-.52 1.16-1.15 0-.64-.52-1.16-1.16-1.16h-.58Zm19.11 0c-.64 0-1.16.52-1.16 1.16 0 .63.52 1.15 1.16 1.15h.58c.64 0 1.16-.52 1.16-1.15 0-.64-.52-1.16-1.16-1.16h-.58Zm-15 8.52c.46-.45.46-1.18 0-1.63-.45-.46-1.18-.46-1.63 0l-.41.41c-.46.45-.46 1.18 0 1.63.45.46 1.18.46 1.63 0l.41-.41Zm13.1-1.63c-.45-.46-1.18-.46-1.63 0-.46.45-.46 1.18 0 1.63l.41.41c.45.46 1.18.46 1.63 0 .46-.45.46-1.18 0-1.63l-.41-.41Zm-6.21 3.53c0-.64-.52-1.16-1.15-1.16-.64 0-1.16.52-1.16 1.16v.58c0 .64.52 1.16 1.16 1.16.63 0 1.15-.52 1.15-1.16v-.58ZM6.36 11c0-2.56 2.08-4.64 4.64-4.64 2.55 0 4.63 2.08 4.63 4.64A4.64 4.64 0 0 1 11 15.63c-2.56 0-4.64-2.08-4.64-4.63ZM11 4.05c-3.84 0-6.95 3.11-6.95 6.95 0 3.83 3.11 6.94 6.95 6.94 3.83 0 6.94-3.11 6.94-6.94 0-3.84-3.11-6.95-6.94-6.95Z"
              fill="#F7F7F7"
              fillRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.12.54c.21.37.2.83-.05 1.18a6.632 6.632 0 0 0-1.16 3.75 6.61 6.61 0 0 0 6.61 6.61c1.39 0 2.68-.43 3.75-1.16a1.096 1.096 0 0 1 1.72 1C21.51 17.56 16.78 22 11.01 22 4.93 22 0 17.06 0 10.98 0 5.21 4.43.48 10.07 0c.43-.04.84.18 1.05.54ZM8.17 2.63a8.817 8.817 0 0 0-5.97 8.35c0 4.87 3.94 8.81 8.81 8.81 3.88 0 7.17-2.5 8.35-5.97-.89.3-1.85.46-2.84.46-4.87 0-8.81-3.94-8.81-8.81 0-.99.16-1.95.46-2.84Z"
              fill="#F7F7F7"
            />
          </svg>
        )}
      </div>
    </>
  );
};

export default index;
