/* eslint-disable react/prop-types */
const Item = (props) => {
  const { id, name } = props.user;
  let remove = props.remove;
  return (
    <li key={id}>
      {name}
      <button
        onClick={() => remove(id)}
        style={{ marginRight: "50px", color: "red" }}
      >
        Del
      </button>
    </li>
  );
};

export default Item;
