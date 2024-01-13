function searchBar({ onSubmit }) {
  return (
    <div>
      <input type="text" />
      <button onClick={() => onSubmit("cars")}>Click me</button>
    </div>
  );
}

export default searchBar;
