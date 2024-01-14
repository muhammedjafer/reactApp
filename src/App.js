import searchImages from "./Api";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <div>
      <SearchBar onSubmit={(term) => searchImages(term)} />
    </div>
  );
}
