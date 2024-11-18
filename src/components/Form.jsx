/* eslint-disable react/prop-types */
import Button from './Button';
import FormInput from './FormInput';

function Form({ title }) {
  return (
    <>
      <h1>{title}</h1>

      <div>
        {/* first name */}
        <div className='grid'>
          <label htmlFor='first'>First Name</label>
          {/* <input type='text' /> */}
          <FormInput type='text' id='first' />
        </div>

        {/* last name */}
        <div className='grid'>
          <label htmlFor='last'>Last Name</label>
          {/* <input type='text' /> */}
          <FormInput type='text' id='last' />
        </div>

        {/* email name */}
        <div className='grid'>
          <label htmlFor='email'>Email</label>
          {/* <input type='text' /> */}
          <FormInput type='text' id='email' />
        </div>

        {/* query type */}
        <div className='grid'>
          <label htmlFor='query'>Query Type</label>
          <div className='grid grid-cols-[auto_1fr] gap-4 border border-grey-900 rounded-md px-5 py-3'>
            <input type='radio' name='query' id='general' />
            <label htmlFor='general'>General Enquiry</label>
          </div>
          <div className='grid grid-cols-[auto_1fr] gap-4 border border-grey-900 rounded-md px-5 py-3'>
            <input type='radio' name='query' id='support' />
            <label htmlFor='support'>Support Request</label>
          </div>
        </div>

        {/* message */}
        <div className='grid'>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            id='message'
            // rows='5'
            className='border border-grey-900 rounded-md px-5 py-3'
          ></textarea>
        </div>

        {/* consent */}
        <div className='grid'>
          <div className='grid grid-cols-[auto_1fr] gap-4 '>
            <input type='checkbox' name='consent' id='consent' />
            <label htmlFor='consent'>
              I consent to being contacted by the team
            </label>
          </div>
        </div>

        <Button className='bg-green-600 py-4 px-5 text-white rounded-md w-full font-medium'>
          Submit
        </Button>
      </div>
    </>
  );
}

export default Form;
