import SuggestionCard from './SuggestionCard';

const data = [
  {
    title: 'Brainstrom content ideas',
    content: 'for my new podcast on urban design',
  },
  {
    title: 'Give me ideas',
    content: 'for what to do with my kids art',
  },
  {
    title: 'Write a Python script',
    content: 'to automate sending daily email reports',
  },
  {
    title: 'Explain nostalgia',
    content: 'to a kindergartener',
  },
];

function SuggestionBox() {
  return (
    <div className='grid grid-cols-1 grid-rows-4 gap-2'>
      {data.map(({ title, content }) => (
        <SuggestionCard key={title} title={title} content={content} />
      ))}
    </div>
  );
}

export default SuggestionBox;
