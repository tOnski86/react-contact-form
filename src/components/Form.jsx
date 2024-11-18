/* eslint-disable react/prop-types */
import Button from './Button';
import FormInput from './FormInput';

function Form({ title }) {
  return (
    <div className='grid bg-white grid-cols-1 sm:grid-cols-2 mx-4 my-8 p-6 rounded-2xl gap-6 md:min-w-[700px] shadow-sm'>
      <h1 className='sm:col-span-2 text-3xl font-bold'>{title}</h1>

      {/* first name */}
      <div className='grid sm:col-span-1 gap-2'>
        <label htmlFor='first'>First Name</label>
        <FormInput type='text' id='first' />
      </div>

      {/* last name */}
      <div className='grid sm:col-span-1 gap-2'>
        <label htmlFor='last'>Last Name</label>
        <FormInput type='text' id='last' />
      </div>

      {/* email name */}
      <div className='grid sm:col-span-2 gap-2'>
        <label htmlFor='email'>Email</label>
        <FormInput type='text' id='email' />
      </div>

      {/* query type */}
      <div className='grid sm:col-span-2 gap-4'>
        <label htmlFor='query'>Query Type</label>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {/* apply selected radio bg here */}
          <div className='grid grid-cols-[auto_1fr] gap-4 border border-grey-500 rounded-lg px-5 py-3 hover:cursor-pointer '>
            <input
              type='radio'
              name='query'
              id='general'
              className='accent-green-600 transition-all cursor-pointer focus:outline-green-600 outline-1 hover:cursor-pointer'
            />
            <label htmlFor='general' className='hover:cursor-pointer'>
              General Enquiry
            </label>
          </div>

          {/* apply selected radio bg here */}
          <div className='grid grid-cols-[auto_1fr] gap-4 border border-grey-500 rounded-lg px-5 py-3 hover:cursor-pointer'>
            <input
              type='radio'
              name='query'
              id='support'
              className='accent-green-600 transition-all cursor-pointer focus:outline-green-600 outline-1 hover:cursor-pointer'
            />
            <label htmlFor='support' className='hover:cursor-pointer'>
              Support Request
            </label>
          </div>
        </div>
      </div>

      {/* message */}
      <div className='grid sm:col-span-2 gap-2'>
        <label htmlFor='message'>Message</label>
        <textarea
          name='message'
          id='message'
          // rows='5'
          className='border border-grey-500 rounded-lg px-5 py-3 resize-y h-36 sm:h-24 hover:border-green-600 transition-all cursor-pointer focus:outline-green-600 outline-1'
        ></textarea>
      </div>

      {/* consent */}
      <div className='grid sm:col-span-2 my-4'>
        <div className='grid grid-cols-[auto_1fr] gap-4 '>
          <input
            type='checkbox'
            name='consent'
            id='consent'
            className='accent-green-600 border-grey-500 hover:border-green-600 transition-all focus:outline-green-600 outline-1  hover:cursor-pointer'
          />
          <label htmlFor='consent' className='hover:cursor-pointer'>
            I consent to being contacted by the team
          </label>
        </div>
      </div>

      <Button className='sm:col-span-2 bg-green-600 py-4 px-5 text-white rounded-md w-full font-medium hover:bg-[#063F36] transition-colors'>
        Submit
      </Button>
    </div>
  );
}

export default Form;
