'use client';

import { sendMessage } from '@/lib/action';
import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';

function SearchBox({ setValue }: { setValue: any }) {
  const ref = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const [state, dispatch] = useFormState(sendMessage, {});

  useEffect(() => {
    if (state.response) setValue(state.response);
  }, [setValue, state]);

  return (
    <form
      ref={ref}
      onSubmit={() =>
        setValue({ role: 'user', message: messageRef.current?.value })
      }
      action={async (formData: FormData) => {
        ref.current?.reset();
        dispatch(formData);
      }}
    >
      <input
        ref={messageRef}
        placeholder='Send a message'
        name='message'
        required
        className='w-full resize-none rounded-xl px-3 py-4 shadow-lg bg-[#494c5ecf] outline-none'
      />
    </form>
  );
}

export default SearchBox;
