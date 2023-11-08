'use client';

import { useLocalStorage } from '@/lib/useLocalStorage';
import SearchBox from './SearchBox';
import SuggestionBox from './SuggestionBox';

function SearchAndSuggestion() {
  const [value] = useLocalStorage('messages');

  return (
    <div className='absolute w-full bottom-0 right-0'>
      {!value && (
        <div className='p-3'>
          <SuggestionBox />
        </div>
      )}
      <div className='border-t md:border-none border-gray-500 p-3 text-center'>
        <SearchBox />
        <span className='text-xs text-gray-300 '>
          ChatGPT can make mistakes. Consider checking important information.
        </span>
      </div>
    </div>
  );
}

export default SearchAndSuggestion;
