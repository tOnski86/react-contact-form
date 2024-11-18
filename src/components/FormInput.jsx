/* eslint-disable react/prop-types */
function FormInput({ ...props }) {
  const { type, name, id, value, onChange } = props;

  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className='border border-grey-500 rounded-lg px-5 py-3 hover:border-green-600 transition-all cursor-pointer focus:outline-green-600 outline-1 min-w-full'
    />
  );
}

export default FormInput;
