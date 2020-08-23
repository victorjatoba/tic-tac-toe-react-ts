import React, { useState } from "react";

interface ISquareHookProps {
  value: any;
}

const SquareHook = (props: ISquareHookProps) => {
  const [value, setValue] = useState("");

  return (
    <button className="square" onClick={() => setValue(props.value)}>
      {value}
    </button>
  );
};

export default SquareHook;
