/* eslint-disable react/prop-types */
function UseCallback({onIncrement , onDecrement}) {
  return (
    <div  className="text-center">
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <br />
      <br />
      <br />
      <h2>UseCallBack are used when the function is passed as props to other component. First parameter is the function and the second parameter is the dependancy array. </h2>
      <h2>Note: the dependency array is first checked in useCallback or useEffect hook and if there is any changes in the dependency (due to user interaction) array then the things inside of the useeffect or useCallback is executed !! </h2>
    </div>
  );
}

export default UseCallback;
