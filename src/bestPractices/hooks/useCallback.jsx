/* eslint-disable react/prop-types */
function UseCallback({onIncrement , onDecrement}) {
  return (
    <div  className="text-center">
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <br />
      <br />
      <br />
      <h2>useCallback is a React Hook that lets you cache a function definition between re-renders.</h2>
      <h3>UseCallBack are used when the function is passed as props to other component</h3>
      <h3>Note: the dependency array is first checked in useCallback or useEffect hook and if there is any changes in the dependency (due to user interaction) array then the things inside of the useeffect or useCallback is executed !! </h3>
    </div>
  );
}

export default UseCallback;
