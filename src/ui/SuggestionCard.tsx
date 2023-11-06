function SuggestionCard({
  title,
  content,
}: {
  title: String;
  content: String;
}) {
  return (
    <div className='space-y-1 border border-gray-500 rounded-xl p-2 px-3'>
      <h4 className='text-sm font-semibold'>{title}</h4>
      <p className='text-xs text-gray-400'>{content}t</p>
    </div>
  );
}

export default SuggestionCard;
