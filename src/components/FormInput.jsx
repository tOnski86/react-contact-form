/* eslint-disable react/prop-types */
function FormInput({ ...props }) {
  const { type, name, id, value } = props;

  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      className='border border-grey-900 rounded-md px-5 py-3'
    />
  );
}

export default FormInput;
