import chitChatImg from '../assets/message.png';

export default function ChitChat(){
  return (
    <div>
        <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4'>
            <div className='shrink-0'>
                <img src={chitChatImg} className='box-content h-10 w-10' alt="Chit Chat Logo" />
            </div>
            <div>
                <div className='text-xl font-medium text-black'>ChitChat</div>
                <p className='text-slate-500'>You have a new message!</p>
            </div>
        </div>
    </div>
  )
}
