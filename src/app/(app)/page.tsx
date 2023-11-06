import SearchBox from '@/ui/SearchBox';
import SuggestionBox from '@/ui/SuggestionBox';

function HomePage() {
  return (
    <div className='relative p-3 h-screen flex flex-col justify-center items-center'>
      <div className='pb-60'>
        <h1 className='text-4xl text-gray-600 font-semibold'>ChatGPT</h1>
      </div>
      <div className='absolute w-full bottom-0 right-0'>
        <div className='p-3'>
          <SuggestionBox />
        </div>
        <div className='border-t border-gray-500 p-3 text-center'>
          <SearchBox />
          <span className='text-xs text-gray-300 '>
            ChatGPT can make mistakes. Consider checking important information.
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
