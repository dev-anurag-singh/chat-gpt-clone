import SearchAndSuggestion from '@/ui/SearchAndSuggestion';

function HomePage() {
  return (
    <div className='max-w-4xl m-auto md:px-4'>
      <div className='relative p-3 h-screen flex flex-col justify-center items-center'>
        <div className='pb-60'>
          <h1 className='text-4xl text-gray-600 font-semibold'>ChatGPT</h1>
        </div>
        <SearchAndSuggestion />
      </div>
    </div>
  );
}

export default HomePage;
