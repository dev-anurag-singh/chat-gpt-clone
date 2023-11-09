import UserIcon from '@/ui/UserIcon';
import DesktopIcon from './DesktopIcon';

function Messages({ messages }: { messages: [] }) {
  return (
    <div className='basis-full overflow-y-scroll no-scrollbar pt-10 pb-40 w-full '>
      {messages.map(({ message, role }, index) => {
        return (
          <div
            key={index}
            className={`p-6 ${role === 'assistant' && 'bg-[#4e4f62]'}`}
          >
            <div className='max-w-4xl m-auto'>
              <div className='flex items-top gap-6'>
                <span className='bg-[#19c37d] rounded-md w-10 h-10 flex justify-center items-center'>
                  {role === 'user' ? <UserIcon /> : <DesktopIcon />}
                </span>
                <p>{message}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Messages;
