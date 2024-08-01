import { useEffect, useState } from "react";
import Header from "./components/Header";
import Task from "./components/Task";
import ChangeTheme from "./components/ChangeTheme";
import PopUp from "./components/NewNote";
import Empty from "./components/Empty";
import axios from "axios";

function App() {
  const [noteOpen, setNoteOpen] = useState(false);
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState(""); // Новое состояние для значения инпута

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://1d9d071e1c37a4f4.mokky.dev/notes"
        );
        setData(response.data);
      } catch (error) {
        alert("Не удалось загрузить задачи:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleAddNote = async (value) => {
    setInputValue(value);
    // Логика для добавления новой заметки в data
    const newNote = { title: value };
    try {
      const response = await axios.post(
        "https://1d9d071e1c37a4f4.mokky.dev/notes",
        newNote
      );
      const savedNote = response.data; // Получаем сохраненную заметку с id от сервера
      setData((prevData) => [...prevData, savedNote]);
    } catch (error) {
      alert("Не удалось добавить задачу:", error.message);
    }
  };

  const handleDeleteNote = (id) => {
    setData((prevData) => prevData.filter((note) => note.id !== id));
  };

  return (
    <div>
      <PopUp
        closePopUp={() => setNoteOpen(false)}
        noteOpen={noteOpen}
        onAddNote={handleAddNote} // Передаем функцию в PopUp
      />
      <div className="wrapper">
        <div className="container">
          <Header onClickAdd={() => setNoteOpen(true)} />
          <div className="listing">
            {data.length === 0 ? (
              <Empty />
            ) : (
              data.map((obj, index) => (
                <Task key={index} {...obj} onDeleteNote={handleDeleteNote} />
              ))
            )}
          </div>
        </div>
        <ChangeTheme />
      </div>
    </div>
  );
}

export default App;
