import "./App.css";
import UsememoHook from "./bestPractices/hooks/usememo";

function App() {
const myarray = [1,5,2,77,13,623,33,649,36,625,13]
  return (
    <>
    <UsememoHook InData={myarray}/>
    </>
  );
}

export default App;
