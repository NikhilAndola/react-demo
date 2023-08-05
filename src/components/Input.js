import * as React from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef((props, ref) => {
  const { placeholder, inputProps, value } = props;
  const inputRef = React.useRef();
  console.log("inputRef", inputRef);
  return (
    <input ref={ref} value={value} placeholder={placeholder} {...inputProps} />
  );
});

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputProps: PropTypes.node
};

export default Input;
