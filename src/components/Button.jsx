/* eslint-disable react/prop-types */
function Button({ children, ...props }) {
  const { className } = props;

  return <button className={className}>{children}</button>;
}

export default Button;
