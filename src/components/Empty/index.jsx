import s from "./empty.module.scss";

const index = () => {
  return (
    <>
      <div className={s.wrapper}>
        <img width={221} src="/src/img/empty.png" alt="Empty" />
        <p>Empty...</p>
      </div>
    </>
  );
};

export default index;
