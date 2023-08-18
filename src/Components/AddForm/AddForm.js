import { useRef, memo } from "react";
import styles from "./AddForm.module.css";

const AddForm = ({ updateList }) => {
  const itemRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (itemRef.current.value) {
      updateList(itemRef.current.value, Math.floor(Math.random() * 1000) + 1);
    }
    itemRef.current.value = "";
  };

  return (
    <form className={styles.addTodo} onSubmit={handleSubmit}>
      <label>Add a new todo...</label>
      <input type="text" name="add" ref={itemRef} />
    </form>
  );
};

export default memo(AddForm);
