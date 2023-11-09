'use client';

import { useLocalStorage } from '@/lib/useLocalStorage';
import Messages from '@/ui/Messages';
import SearchBox from '@/ui/SearchBox';
import SuggestionBox from '@/ui/SuggestionBox';

function HomePage() {
  const [value, setValue] = useLocalStorage('messages');

  return (
    <div className='relative h-screen flex flex-col justify-center items-center'>
      {value.length ? (
        <Messages messages={value} />
      ) : (
        <div className='pb-60'>
          <h1 className='text-4xl text-gray-600 font-semibold'>ChatGPT</h1>
        </div>
      )}
      <div className='absolute md:pt-4 bg-dark-gradient  w-full bottom-0 right-0'>
        <div className='max-w-4xl mx-auto'>
          {!value.length && <SuggestionBox />}
          <div className='border-t md:border-none border-gray-500 p-3 text-center'>
            <SearchBox setValue={setValue} />
            <span className='text-xs text-gray-300 '>
              ChatGPT can make mistakes. Consider checking important
              information.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
