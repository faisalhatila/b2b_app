import React, { useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import EmojiPicker from 'emoji-picker-react';

const ImageMessageModal = ({
  isOpen,
  onClose,
  imageSrc,
  sendMessage,
  setMessage,
  toggleEmojiPicker,
  emojiPicker,
  message,
  addEmoji,
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 500); // Duration of slide-out animation
    }
  }, [isOpen]);

  if (!isVisible) return null;
  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    //   <div className="bg-white p-4 rounded-md shadow-md max-w-md min-w-[100%] h-full flex flex-col items-center relative">
    //     <button
    //       onClick={onClose}
    //       className="text-right text-xl absolute left-2 top-2"
    //     >
    //       ✖
    //     </button>
    //     <img src={imageSrc} alt="Pasted" className="h-[500px]" />
    //   </div>
    // </div>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className={`bg-white p-4 rounded-md shadow-md w-full h-[100%] transform transition-transform duration-500 ${
          isOpen ? 'animate-slideIn' : 'animate-slideOut'
        }`}
      >
        <button onClick={onClose} className="text-right text-xl">
          ✖
        </button>
        <div className="flex justify-center">
          <img src={imageSrc} alt="Pasted" className="h-[500px]" />
        </div>
        <div className="p-3 border-t border-gray-200">
          <div className="flex items-center relative">
            <button onClick={toggleEmojiPicker} className="mr-2 text-xl">
              😊
            </button>
            {emojiPicker && (
              <div className="absolute z-10 bottom-0">
                <EmojiPicker onEmojiClick={(emoji) => addEmoji(emoji.emoji)} />
              </div>
            )}
            <TextareaAutosize
              // ref={textAreaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              // onKeyDown={handleKeyDown}
              // onPaste={handlePaste}
              className="w-full p-2 border rounded-md resize-none"
              placeholder="Type your message..."
              minRows={1}
              maxRows={5} // Adjust this value as needed
            />
            <button
              onClick={() => {
                sendMessage();
                onClose();
              }}
              className="ml-2 p-2 bg-blue-500 text-white rounded-md"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageMessageModal;
