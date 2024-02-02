import searchImages from "./Api";
import SearchBar from "./components/SearchBar";

export default function App() {
  //callback
  const handleSubmit = (term) => {
    searchImages("cars");
  };

  return <SearchBar onSubmit={handleSubmit} />;
}
