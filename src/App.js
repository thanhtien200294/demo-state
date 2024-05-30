import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import Children1 from "./components/Children1";
import Children2 from "./components/Children2";
import ClassComponent from "./components/ClassComponent";

function App(props) {
  let [state, setState] = useState(1);
  let [state2, setState2] = useState(true);

  useEffect(() => {
    console.log("App render");

  }, [state]);

  const handleAddCount = useCallback(
    (number) => {
      setState(state + 1);
    },
    [state]
  );

  const sum = useMemo(() => {
    let a = 1;
    let c = a + 2 + 3;

    return c;
  }, []);

  console.log(sum);

  return (
    <div style={{ maxWidth: "1200px", margin: "auto" }}>
      <Children1 title={state} handleCount={handleAddCount} />
      {state2 ? <Children2 /> : null}
      <button 
        onClick={() => {
          setState2(current => !current)
        }}
      >open close child2</button>
    </div>
  );
}

export default App;
