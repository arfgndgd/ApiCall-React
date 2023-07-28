import './App.css';
import SearchHeader from './SearchHeader'

function App() {

  const handelSubmit = (term) => {
    console.log(term);
  }

  return (
    <div className="App">
      <SearchHeader search={handelSubmit} />
    </div>
  );
}

export default App;
