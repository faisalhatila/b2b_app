// import React, { useEffect, useRef, useState } from 'react';
// import { FaSearch, FaUser } from 'react-icons/fa';
// import Datatable from '../../components/Datatable/Datatable';
// import ChatroomsListItem from '../../components/Messages/ChatroomsListItem';
// import '../../App.css';
// import ChatroomHeader from '../../components/Messages/ChatroomHeader';
// import { BiCheckDouble } from 'react-icons/bi';
// import Message from '../../components/Messages/Message';
// import EmojiPicker from 'emoji-picker-react';
// import TextareaAutosize from 'react-textarea-autosize';
// import ImageMessageModal from '../../components/Messages/ImageMessageModal';

// const Messages = () => {
//   const [message, setMessage] = useState('');
//   const [emojiPicker, setEmojiPicker] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [pastedImage, setPastedImage] = useState(null);
//   const textAreaRef = useRef(null);

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     } else if (e.key === 'Enter' && e.shiftKey) {
//       const selection = window.getSelection();
//       const range = selection.getRangeAt(0);
//       range.deleteContents();

//       const br = document.createElement('br');
//       range.insertNode(br);
//       range.setStartAfter(br);
//       range.setEndAfter(br);
//       selection.removeAllRanges();
//       selection.addRange(range);
//     }
//   };

//   const sendMessage = () => {
//     // Handle sending message
//     console.log('Message sent:', message);
//     setMessage('');
//     textAreaRef.current.innerHTML = '';
//   };

//   const handlePaste = async (e) => {
//     e.preventDefault();
//     const items = (e.clipboardData || e.originalEvent.clipboardData).items;
//     let isImagePasted = false;
//     console.log({ items });
//     for (const item of items) {
//       console.log({ kind: item.kind, type: item.type });
//       if (item.kind === 'file' && item.type.startsWith('image/')) {
//         isImagePasted = true;
//         const file = item.getAsFile();
//         const reader = new FileReader();
//         reader.onload = (event) => {
//           setPastedImage(event.target.result);
//           setModalOpen(true);
//         };
//         reader.readAsDataURL(file);
//       } else if (!isImagePasted && item.kind === 'string') {
//         item.getAsString((text) => {
//           document.execCommand('insertText', false, text);
//         });
//       }
//     }
//     console.log({ e, inner: textAreaRef.current.innerHTML });
//     textAreaRef.current.innerHTML = '';
//     console.log({ e, inner: textAreaRef.current.innerHTML });
//   };

//   const toggleEmojiPicker = () => {
//     setEmojiPicker(!emojiPicker);
//   };

//   const addEmoji = (emoji) => {
//     setMessage(message + emoji);
//     setEmojiPicker(false);
//     textAreaRef.current.focus();
//   };

//   return (
//     <div className="">
//       <div className="grid grid-cols-1 gap-4 mt-5">
//         <div className="p-2 rounded backdrop-blur-[10px]">
//           <h1 className="text-[24px] font-bold mb-4 border-b-[1px] pb-2 border-b-[#ccc]">
//             Messages
//           </h1>
//           <div class="grid grid-cols-4 gap-4">
//             <div class="col-span-1">
//               <div className="flex items-center border rounded border-[#ccc] p-3">
//                 <input
//                   placeholder="Search"
//                   className="outline-none bg-transparent flex-1"
//                 />
//                 <FaSearch />
//               </div>
//               <div className="mt-3 border rounded border-[#ccc] p-2 chatroom-list overflow-auto">
//                 {[...Array(10)].map((_, i) => (
//                   <ChatroomsListItem
//                     key={i}
//                     lastMessage="This was the old message"
//                     name="Faisal"
//                     unRead={100}
//                     sender="you"
//                   />
//                 ))}
//               </div>
//             </div>
//             <div class="col-span-3 rounded border border-[#ccc] flex flex-col">
//               <ChatroomHeader />
//               <div className="flex-1 p-3 overflow-auto messages-box">
//                 {[...Array(20)].map((_, i) => (
//                   <Message index={i} key={i}>
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Suscipit harum, nam incidunt placeat dolorum veritatis sint
//                     nostrum fuga dicta perferendis at explicabo ipsum, quos quas
//                     provident labore modi mollitia itaque.
//                   </Message>
//                 ))}
//               </div>
//               {/* <div className="p-3">

//                 <EmojiPicker onEmojiClick={(e) => console.log({ e })} />
//               </div> */}
//               <div className="p-3 border-t border-gray-200">
//                 <div className="flex items-center relative">
//                   <button onClick={toggleEmojiPicker} className="mr-2 text-xl">
//                     😊
//                   </button>
//                   {emojiPicker && (
//                     <div className="absolute z-10 bottom-0">
//                       <EmojiPicker
//                         onEmojiClick={(emoji) => addEmoji(emoji.emoji)}
//                       />
//                     </div>
//                   )}
//                   <TextareaAutosize
//                     ref={textAreaRef}
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     onKeyDown={handleKeyDown}
//                     onPaste={handlePaste}
//                     className="w-full p-2 border rounded-md resize-none"
//                     placeholder="Type your message..."
//                     minRows={1}
//                     maxRows={5} // Adjust this value as needed
//                   />
//                   <button
//                     onClick={sendMessage}
//                     className="ml-2 p-2 bg-blue-500 text-white rounded-md"
//                   >
//                     Send
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ImageMessageModal
//         isOpen={modalOpen}
//         onClose={() => setModalOpen(false)}
//         imageSrc={pastedImage}
//       />
//     </div>
//   );
// };

// export default Messages;

import React from 'react';

const Messages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Title */}
      <header className="bg-gray-800 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Chat</h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-1">
        {/* Chatrooms List */}
        <aside className="w-full lg:w-3/12 bg-gray-100 border-r border-gray-200 p-4 overflow-y-auto">
          <ChatroomList />
        </aside>

        {/* Chat Area */}
        <section className="w-full lg:w-9/12 bg-gray-900 text-white p-4">
          {/* Content for the second column goes here */}
          <div className="h-full flex items-center justify-center">
            <p className="text-2xl">Chat Area</p>
          </div>
        </section>
      </main>
    </div>
  );
};

const ChatroomList = () => {
  const chatrooms = [
    {
      id: 1,
      avatar: 'https://via.placeholder.com/40',
      name: 'User 1',
      lastMessage: 'Hello, how are you?',
      time: '10:30 AM',
      unreadMessages: 2,
    },
    // Add more chatroom data here
  ];

  return (
    <div>
      {chatrooms.map((chatroom) => (
        <ChatroomItem key={chatroom.id} chatroom={chatroom} />
      ))}
    </div>
  );
};

const ChatroomItem = ({ chatroom }) => {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
      <div className="flex items-center">
        <img
          src={chatroom.avatar}
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3 flex-1">
          <div className="font-semibold">{chatroom.name}</div>
          <div className="text-sm text-gray-600 truncate">
            {chatroom.lastMessage}
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm text-gray-500">{chatroom.time}</div>
        {chatroom.unreadMessages > 0 && (
          <div className="bg-red-500 text-white text-xs rounded-full px-2 py-1 mt-1">
            {chatroom.unreadMessages}
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
