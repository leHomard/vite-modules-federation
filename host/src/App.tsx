import "./App.css";

// @ts-expect-error
import Title from "remoteApp/Title";

function App() {
  return (
    <>
      <p>Host application</p>
      <Title />
    </>
  );
}

export default App;
