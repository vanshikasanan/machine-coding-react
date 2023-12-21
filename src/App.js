import { AutoComplete } from "./components/AutoComplete";
import SearchBar from "./components/SearchBar";
import useFetch from "./utils/useFetch";

function App() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const { data, loading, error } = useFetch({ apiUrl });
  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      <AutoComplete options={data.map((user) => user?.name)} />
      <SearchBar data={data} />
    </div>
  );
}

export default App;
