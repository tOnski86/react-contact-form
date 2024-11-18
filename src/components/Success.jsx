import iconSuccess from '/icon-success-check.svg';

function Success() {
  return (
    <div className='absolute -translate-x-1/2 -translate-y-1/2  left-1/2 sm:-top-14 top-20 bg-grey-900 text-white p-4 rounded-md w-full'>
      <div className='flex gap-2 items-center mb-2'>
        <img src={iconSuccess} alt='success icon' />
        <h2 className='font-medium'>Message Sent!</h2>
      </div>
      <p>Thanks for completing the form. We&apos;ll be in touch soon!</p>
    </div>
  );
}

export default Success;
