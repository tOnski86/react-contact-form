/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import FormInput from './FormInput';
import Error from './Error';

const VALID_NAME = str => /^[a-z ,.'-]+$/i.test(str);
const VALID_EMAIL = str => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

function Form({ title }) {
  const [input, setInput] = useState({
    first: '',
    last: '',
    email: '',
    query: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleValidate(input) {
    const errors = {};

    if (input.first === '') {
      errors.first = 'This field is required';
    } else if (!VALID_NAME(input.first)) {
      errors.first = 'Please enter a valid first name';
    }

    if (input.last === '') {
      errors.last = 'This field is required';
    } else if (!VALID_NAME(input.last)) {
      errors.last = 'Please enter a valid last name';
    }

    if (input.email === '') {
      errors.email = 'Email cannot be empty';
    } else if (!VALID_EMAIL(input.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (input.query === '') {
      errors.query = 'Please select a query type';
    }

    if (input.message === '') {
      errors.message = 'This field is required';
    }

    if (input.consent === false) {
      errors.consent = 'To submit this form, please consent to being contacted';
    }

    return errors;
  }

  function handleInput(e) {
    setInput({ ...input, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(handleValidate(input));
    setSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      setSuccess(true);
      setInput({
        first: '',
        last: '',
        email: '',
        query: '',
        message: '',
        consent: false,
      });
      alert('Success!');
    }
  }, [errors, submit, input]);

  return (
    <form
      onSubmit={handleSubmit}
      className='grid bg-white grid-cols-1 sm:grid-cols-2 mx-4 my-8 p-6 sm:p-8 rounded-2xl gap-6 md:min-w-[800px] shadow-sm'
    >
      <h1 className='sm:col-span-2 text-3xl font-bold'>{title}</h1>

      {/* first name */}
      <div>
        <div className='grid sm:col-span-1 gap-2'>
          <label htmlFor='first'>
            First Name <span className='text-green-600'>*</span>
          </label>
          <FormInput
            onChange={e => handleInput(e)}
            value={input.first}
            type='text'
            id='first'
          />
          {errors.first && <Error>{errors.first}</Error>}
        </div>
      </div>

      {/* last name */}
      <div>
        <div className='grid sm:col-span-1 gap-2'>
          <label htmlFor='last'>
            Last Name <span className='text-green-600'>*</span>
          </label>
          <FormInput
            onChange={e => handleInput(e)}
            value={input.last}
            type='text'
            id='last'
          />
          {errors.last && <Error>{errors.last}</Error>}
        </div>
      </div>

      {/* email */}
      <div className='sm:col-span-2'>
        <div className='grid gap-2'>
          <label htmlFor='email'>
            Email <span className='text-green-600'>*</span>
          </label>
          <FormInput
            onChange={e => handleInput(e)}
            value={input.email}
            type='text'
            id='email'
          />
          {errors.email && <Error>{errors.email}</Error>}
        </div>
      </div>

      {/* query type */}
      <div className='sm:col-span-2'>
        <div className='grid sm:col-span-2 gap-4'>
          <label htmlFor='query'>
            Query Type <span className='text-green-600'>*</span>
          </label>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {/* apply selected radio bg here */}
            <div className='grid grid-cols-[auto_1fr] gap-4 border border-grey-500 rounded-lg px-5 py-3 hover:cursor-pointer '>
              <input
                onChange={e => handleInput(e)}
                value='general'
                type='radio'
                name='query'
                id='query'
                className='accent-green-600 transition-all cursor-pointer focus:outline-green-600 outline-1 hover:cursor-pointer'
              />
              <label htmlFor='general' className='hover:cursor-pointer'>
                General Enquiry
              </label>
            </div>

            {/* apply selected radio bg here */}
            <div className='grid grid-cols-[auto_1fr] gap-4 border border-grey-500 rounded-lg px-5 py-3 hover:cursor-pointer'>
              <input
                onChange={e => handleInput(e)}
                value='support'
                type='radio'
                name='query'
                id='query'
                className='accent-green-600 transition-all cursor-pointer focus:outline-green-600 outline-1 hover:cursor-pointer'
              />
              <label htmlFor='support' className='hover:cursor-pointer'>
                Support Request
              </label>
            </div>
          </div>
          {errors.query && <Error>{errors.query}</Error>}
        </div>
      </div>

      {/* message */}
      <div className='sm:col-span-2'>
        <div className='grid sm:col-span-2 gap-2'>
          <label htmlFor='message'>
            Message <span className='text-green-600'>*</span>
          </label>
          <textarea
            onChange={e => handleInput(e)}
            value={input.message}
            name='message'
            id='message'
            className='border border-grey-500 rounded-lg px-5 py-3 resize-y min-h-36 sm:min-h-24 hover:border-green-600 transition-all cursor-pointer focus:outline-green-600 outline-1'
          ></textarea>
          {errors.message && <Error>{errors.message}</Error>}
        </div>
      </div>

      {/* consent */}
      <div className='sm:col-span-2'>
        <div className='grid sm:col-span-2 my-4'>
          <div className='grid grid-cols-[auto_1fr] gap-4 '>
            <input
              onChange={e =>
                setInput({ ...input, [e.target.id]: e.target.checked })
              }
              value={input.consent}
              type='checkbox'
              name='consent'
              id='consent'
              className='accent-green-600 border-grey-500 hover:border-green-600 transition-all focus:outline-green-600 outline-1  hover:cursor-pointer'
            />
            <label htmlFor='consent' className='hover:cursor-pointer'>
              I consent to being contacted by the team{' '}
              <span className='text-green-600'>*</span>
            </label>
          </div>
          {errors.consent && <Error>{errors.consent}</Error>}
        </div>
      </div>

      <Button className='sm:col-span-2 bg-green-600 py-4 px-5 text-white rounded-md w-full font-medium hover:bg-[#063F36] transition-colors'>
        Submit
      </Button>
    </form>
  );
}

export default Form;
