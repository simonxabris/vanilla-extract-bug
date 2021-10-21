import { sprinkles } from "./sprinkless.css";

function App() {
  return (
    // If you change mt to be 0, there will be no class assigned with the correct margin value
    <div className={sprinkles({ m: 4, mt: 1 })}>
      <p>Vanilla extract</p>
    </div>
  );
}

export default App;
