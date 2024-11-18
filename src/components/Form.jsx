/* eslint-disable react/prop-types */
import Button from './Button';
import FormInput from './FormInput';

function Form({ title }) {
  return (
    <div className='grid bg-white grid-cols-1 sm:grid-cols-2'>
      <h1 className='sm:col-span-2'>{title}</h1>

      {/* first name */}
      <div className='grid sm:col-span-1'>
        <label htmlFor='first'>First Name</label>
        <FormInput type='text' id='first' />
      </div>

      {/* last name */}
      <div className='grid sm:col-span-1'>
        <label htmlFor='last'>Last Name</label>
        <FormInput type='text' id='last' />
      </div>

      {/* email name */}
      <div className='grid sm:col-span-2'>
        <label htmlFor='email'>Email</label>
        <FormInput type='text' id='email' />
      </div>

      {/* query type */}
      <div className='grid sm:col-span-2'>
        <label htmlFor='query'>Query Type</label>

        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div className='grid grid-cols-[auto_1fr] gap-4 border border-grey-500 rounded-md px-5 py-3'>
            <input type='radio' name='query' id='general' />
            <label htmlFor='general'>General Enquiry</label>
          </div>

          <div className='grid grid-cols-[auto_1fr] gap-4 border border-grey-500 rounded-md px-5 py-3'>
            <input type='radio' name='query' id='support' />
            <label htmlFor='support'>Support Request</label>
          </div>
        </div>
      </div>

      {/* message */}
      <div className='grid sm:col-span-2'>
        <label htmlFor='message'>Message</label>
        <textarea
          name='message'
          id='message'
          // rows='5'
          className='border border-grey-500 rounded-md px-5 py-3 resize-y'
        ></textarea>
      </div>

      {/* consent */}
      <div className='grid sm:col-span-2'>
        <div className='grid grid-cols-[auto_1fr] gap-4 '>
          <input
            type='checkbox'
            name='consent'
            id='consent'
            className='accent-green-600 border-grey-500'
          />
          <label htmlFor='consent'>
            I consent to being contacted by the team
          </label>
        </div>
      </div>

      <Button className='sm:col-span-2 bg-green-600 py-4 px-5 text-white rounded-md w-full font-medium'>
        Submit
      </Button>
    </div>
  );
}

export default Form;
