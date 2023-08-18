import trash from "../../Assets/trash-icon.svg";
import styles from "./List.module.css";

const List = ({ list, deleteFromList }) => {
  const handleDelete = (event) => {
    const deleteItem = Number(event.target.parentElement.id);
    deleteFromList(deleteItem);
  };

  const listItems = list.map((item) => {
    return (
      <li key={item.id} id={item.id}>
        <span>{item.name}</span>
        <img src={trash} alt="delete" onClick={handleDelete} />
      </li>
    );
  });

  return <ul className={styles.list}>{listItems}</ul>;
};

export default List;
