import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./classics/counter";
import "./index.css";
// import App from './App.jsx'
// import MyClassComponent from './classics/firstClass'
// import RecipeApp from './react-recipe'
// import UseCallback from './bestPractices/hooks/useCallback'
// import UseStateHook from './bestPractices/hooks/hooks.jsx'
// import UsememoHook from './bestPractices/hooks/usememo.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RecipeApp/> */}
    {/* <MyClassComponent/> */}
    <Counter />
    {/* <App /> */}
    {/* <UseStateHook/> */}
    {/* <UseCallback/> */}
    {/* <UsememoHook/> */}
  </React.StrictMode>
);
