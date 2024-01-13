import searchImages from "./Api";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <SearchBar onSubmit={(term) => searchImages(term)} />
    </div>
  );
}

export default App;
