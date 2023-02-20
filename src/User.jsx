import React, {forwardRef} from "react";

const User = (props,ref) => {
  return (
    <>
      <input type="text" name="text" id="text" ref={ref} />
    </>
  );
};

export default forwardRef(User);


