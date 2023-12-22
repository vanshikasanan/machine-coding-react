import { AutoComplete } from "./components/AutoComplete";
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";
import useFetch from "./utils/useFetch";

function App() {
  const apiUrl = "https://dummyjson.com/users";
  const { data, loading, error } = useFetch({ apiUrl });
  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      {/* <AutoComplete options={data.map((user) => user?.name)} /> */}
      {/* <SearchBar data={data} /> */}
      <TodoList />
    </div>
  );
}

export default App;
