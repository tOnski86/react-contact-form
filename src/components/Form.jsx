/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import Button from './Button';
import FormInput from './FormInput';

const initialState = {
  first: '',
  last: '',
  email: '',
  query: '',
  message: '',
  consent: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'setFirst':
      return { ...state, first: action.payload };
    case 'setLast':
      return { ...state, last: action.payload };
    case 'setEmail':
      return { ...state, email: action.payload };
    case 'setQuery':
      return { ...state, query: action.payload };
    case 'setMessage':
      return { ...state, message: action.payload };
    case 'setConsent':
      return { ...state, consent: action.payload };
    default:
      return 'Action not found';
  }
}

function Form({ title }) {
  const [state, dispatch] = useReducer(reducer, {});
  const { first, last, email, message, consent } = state;

  function handleDispatch(type, payload) {
    dispatch({ type, payload });
  }

  return (
    <div className='grid bg-white grid-cols-1 sm:grid-cols-2 mx-4 my-8 p-6 sm:p-8 rounded-2xl gap-6 md:min-w-[700px] shadow-sm'>
      <h1 className='sm:col-span-2 text-3xl font-bold'>{title}</h1>

      {/* first name */}
      <div className='grid sm:col-span-1 gap-2'>
        <label htmlFor='first'>
          First Name <span className='text-green-600'>*</span>
        </label>
        <FormInput
          onChange={e => handleDispatch('setFirst', e.target.value)}
          value={first}
          type='text'
          id='first'
        />
      </div>

      {/* last name */}
      <div className='grid sm:col-span-1 gap-2'>
        <label htmlFor='last'>
          Last Name <span className='text-green-600'>*</span>
        </label>
        <FormInput
          onChange={e => handleDispatch('setLast', e.target.value)}
          value={last}
          type='text'
          id='last'
        />
      </div>

      {/* email */}
      <div className='grid sm:col-span-2 gap-2'>
        <label htmlFor='email'>
          Email <span className='text-green-600'>*</span>
        </label>
        <FormInput
          onChange={e => handleDispatch('setEmail', e.target.value)}
          value={email}
          type='text'
          id='email'
        />
      </div>

      {/* query type */}
      <div className='grid sm:col-span-2 gap-4'>
        <label htmlFor='query'>
          Query Type <span className='text-green-600'>*</span>
        </label>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {/* apply selected radio bg here */}
          <div className='grid grid-cols-[auto_1fr] gap-4 border border-grey-500 rounded-lg px-5 py-3 hover:cursor-pointer '>
            <input
              onChange={e => handleDispatch('setQuery', e.target.value)}
              value='general'
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
              onChange={e => handleDispatch('setQuery', e.target.value)}
              value='support'
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
        <label htmlFor='message'>
          Message <span className='text-green-600'>*</span>
        </label>
        <textarea
          onChange={e => handleDispatch('setMessage', e.target.value)}
          value={message}
          name='message'
          id='message'
          className='border border-grey-500 rounded-lg px-5 py-3 resize-y min-h-36 sm:min-h-24 hover:border-green-600 transition-all cursor-pointer focus:outline-green-600 outline-1'
        ></textarea>
      </div>

      {/* consent */}
      <div className='grid sm:col-span-2 my-4'>
        <div className='grid grid-cols-[auto_1fr] gap-4 '>
          <input
            onChange={e => handleDispatch('setConsent', e.target.checked)}
            value={consent}
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
      </div>

      <Button className='sm:col-span-2 bg-green-600 py-4 px-5 text-white rounded-md w-full font-medium hover:bg-[#063F36] transition-colors'>
        Submit
      </Button>
    </div>
  );
}

export default Form;
