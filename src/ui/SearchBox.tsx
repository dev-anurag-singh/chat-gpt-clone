'use client';

import { sendMessage } from '@/lib/action';
import { useLocalStorage } from '@/lib/useLocalStorage';
import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';

function SearchBox() {
  const ref = useRef<HTMLFormElement>(null);
  const [value, setValue] = useLocalStorage('messages');

  const [state, dispatch] = useFormState(sendMessage, {});

  useEffect(() => {
    if (state.response) setValue(state.response);
  }, [setValue, state]);

  return (
    <form
      ref={ref}
      action={async (formData: FormData) => {
        // set message into local storage
        setValue({ role: 'user', message: formData.get('message') });
        ref.current?.reset();
        await dispatch(formData);
      }}
    >
      <input
        placeholder='Send a message'
        name='message'
        className='w-full resize-none rounded-xl px-3 py-4 shadow-lg bg-[#494c5ecf] outline-none'
      />
    </form>
  );
}

export default SearchBox;
