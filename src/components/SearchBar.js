export default function searchBar({ onSubmit }) {
  const handleFormSubmit = (event) => {
    // always use it to know if the user
    // clicked the submit button
    event.preventDefault();
    onSubmit('cars');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input />
      </form>
    </div>
  );
}
