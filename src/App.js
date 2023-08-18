import { useState, useCallback } from "react";
import "./App.css";
import Wrapper from "./Components/UI/Wrapper";
import List from "./Components/List/List";
import AddForm from "./Components/AddForm/AddForm";

const DUMMY_DATA = [
  { name: "Learn Javascript", id: 1 },
  { name: "Learn React", id: 2 },
  { name: "Learn Redux", id: 3 },
];

const App = () => {
  const [list, setList] = useState(DUMMY_DATA);

  const updateList = useCallback((item, id) => {
    setList((prevList) => {
      return [...prevList, { name: item, id }];
    });
  }, []);

  const deleteFromList = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const toDoList =
    list.length === 0 ? (
      <p style={{ color: "#fff" }}>No todo's available at the moment.</p>
    ) : (
      <List list={list} deleteFromList={deleteFromList} />
    );

  return (
    <div className="App">
      <h2>Todo App</h2>
      <Wrapper>
        {toDoList}
        <AddForm updateList={updateList} />
      </Wrapper>
    </div>
  );
};

export default App;
