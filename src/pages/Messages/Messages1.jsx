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

import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Datatable from '../../components/Datatable/Datatable';
import ChatroomsListItem from '../../components/Messages/ChatroomsListItem';
import '../../App.css';
import ChatroomHeader from '../../components/Messages/ChatroomHeader';
import Message from '../../components/Messages/Message';
import EmojiPicker from 'emoji-picker-react';
import TextareaAutosize from 'react-textarea-autosize';
import ImageMessageModal from '../../components/Messages/ImageMessageModal';

const Messages = () => {
  const [message, setMessage] = useState('');
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [pastedImage, setPastedImage] = useState(null);
  const textAreaRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    } else if (e.key === 'Enter' && e.shiftKey) {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      range.deleteContents();

      const br = document.createElement('br');
      range.insertNode(br);
      range.setStartAfter(br);
      range.setEndAfter(br);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const sendMessage = () => {
    // Handle sending message
    console.log('Message sent:', message);
    setMessage('');
    textAreaRef.current.value = '';
  };

  const handlePaste = async (e) => {
    e.preventDefault();
    const items = (e.clipboardData || e.originalEvent.clipboardData).items;
    let isImagePasted = false;
    for (const item of items) {
      if (item.kind === 'file' && item.type.startsWith('image/')) {
        isImagePasted = true;
        const file = item.getAsFile();
        const reader = new FileReader();
        reader.onload = (event) => {
          setPastedImage(event.target.result);
          setModalOpen(true);
        };
        reader.readAsDataURL(file);
      }
    }

    // If no image is pasted, handle as text
    if (!isImagePasted) {
      let pastedText = '';
      for (const item of items) {
        if (item.kind === 'string') {
          pastedText += await new Promise((resolve) =>
            item.getAsString((text) => resolve(text))
          );
        }
      }
      document.execCommand('insertText', false, pastedText);
    }
  };

  const toggleEmojiPicker = () => {
    setEmojiPicker(!emojiPicker);
  };

  const addEmoji = (emoji) => {
    setMessage(message + emoji);
    setEmojiPicker(false);
    textAreaRef.current.focus();
  };

  return (
    <div className="">
      {/* <div class="flex mb-4">
        <div class="w-full bg-gray-500 h-12"></div>
      </div> */}
      <h1 className="text-[24px] font-bold mb-4 border-b-[1px] pb-2 border-b-[#ccc]">
        Messages
      </h1>
      <div class="flex flex-wrap mb-4">
        <div class="w-full lg:w-3/12">
          <div className="">
            <div className="flex items-center border rounded border-[#ccc] p-3">
              <input
                placeholder="Search"
                className="outline-none bg-transparent flex-1"
              />
              <FaSearch />
            </div>
            <div className="mt-3 max-w-[100%] border rounded border-[#ccc] p-2 chatroom-list overflow-y-auto max-h-[100%]">
              {[...Array(10)].map((_, i) => (
                <ChatroomsListItem
                  key={i}
                  lastMessage="This was the old message"
                  name={`Test client ${i + 1}`}
                  unRead={9}
                  sender="you"
                />
              ))}
            </div>
          </div>
        </div>
        <div class="w-full lg:w-9/12 pl-4">
          <div className="col-span-12 md:col-span-3 rounded border border-[#ccc] flex flex-col">
            <ChatroomHeader />
            <div className="flex-1 p-3 overflow-auto messages-box">
              {[...Array(20)].map((_, i) => (
                <Message index={i} key={i}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Suscipit harum, nam incidunt placeat dolorum veritatis sint
                  nostrum fuga dicta perferendis at explicabo ipsum, quos quas
                  provident labore modi mollitia itaque.
                </Message>
              ))}
            </div>
            <div className="p-3 border-t border-gray-200">
              <div className="flex items-center relative">
                <button onClick={toggleEmojiPicker} className="mr-2 text-xl">
                  😊
                </button>
                {emojiPicker && (
                  <div className="absolute z-10 bottom-0">
                    <EmojiPicker
                      onEmojiClick={(emoji) => addEmoji(emoji.emoji)}
                    />
                  </div>
                )}
                <TextareaAutosize
                  ref={textAreaRef}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onPaste={handlePaste}
                  className="w-full p-2 border rounded-md resize-none"
                  placeholder="Type your message..."
                  minRows={1}
                  maxRows={5} // Adjust this value as needed
                />
                <button
                  onClick={sendMessage}
                  className="ml-2 p-2 bg-blue-500 text-white rounded-md"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="flex mb-4">
        <div class="w-1/3 bg-gray-400 h-12"></div>
        <div class="w-1/3 bg-gray-500 h-12"></div>
        <div class="w-1/3 bg-gray-400 h-12"></div>
      </div>

      <div class="flex mb-4">
        <div class="w-1/4 bg-gray-500 h-12"></div>
        <div class="w-1/4 bg-gray-400 h-12"></div>
        <div class="w-1/4 bg-gray-500 h-12"></div>
        <div class="w-1/4 bg-gray-400 h-12"></div>
      </div>

      <div class="flex mb-4">
        <div class="w-1/5 bg-gray-500 h-12"></div>
        <div class="w-1/5 bg-gray-400 h-12"></div>
        <div class="w-1/5 bg-gray-500 h-12"></div>
        <div class="w-1/5 bg-gray-400 h-12"></div>
        <div class="w-1/5 bg-gray-500 h-12"></div>
      </div>

      <div class="flex">
        <div class="w-1/6 bg-gray-400 h-12"></div>
        <div class="w-1/6 bg-gray-500 h-12"></div>
        <div class="w-1/6 bg-gray-400 h-12"></div>
        <div class="w-1/6 bg-gray-500 h-12"></div>
        <div class="w-1/6 bg-gray-400 h-12"></div>
        <div class="w-1/6 bg-gray-500 h-12"></div>
      </div> */}
      <ImageMessageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={pastedImage}
        sendMessage={sendMessage}
        setMessage={setMessage}
        emojiPicker={emojiPicker}
        toggleEmojiPicker={toggleEmojiPicker}
        message={message}
        addEmoji={addEmoji}
      />
    </div>
  );
};

export default Messages;
