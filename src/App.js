import { AutoComplete } from "./components/AutoComplete";
import useFetch from "./utils/useFetch";

function App() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const { data, loading, error } = useFetch({ apiUrl });

  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      <AutoComplete options={data.map((user) => user?.name)} />
    </div>
  );
}

export default App;
