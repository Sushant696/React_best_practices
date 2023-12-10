/* eslint-disable react/prop-types */
import { useMemo } from "react";

function UsememoHook({ InData }) {
    function handleCountArray (InData){
        return InData.length
    }
    
  // usememo takes a function and an array of dependencies
  const memoizedResult = useMemo(() => {
    return handleCountArray(InData);
  }, [InData]);

  return (
    <div className="notes">
     result :  {memoizedResult}
    </div>
  );
}

export default UsememoHook;
