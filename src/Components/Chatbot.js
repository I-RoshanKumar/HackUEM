import React, { useEffect, useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };
    useEffect(() => {
        handleSendMessage();
    }, [])
    const handleSendMessage = () => {
        if (inputText.trim() !== '') {
            setMessages([...messages, { text: inputText, sender: 'user' }]);
            setInputText('');
    
            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'sample response from the bot', sender: 'bot' },
                ]);
            }, 1000);
        }
    };
    

    return (
        <div className="fixed bottom-[120px] right-12 cursor-pointer bg-[#a0cfffcb] rounded border-2 border-black w-[350px] h-[500px] chatbox">
            <div className="h-[70px] bg-[#418dd9be] flex items-center p-3 gap-4 justify-between">
                <div className="flex gap-8 items-center">
                    <div>
                        <FaRobot className="text-4xl" />
                    </div>
                    <div className="font-semibold">Yodha</div>
                </div>
                <div>
                    <BsThreeDotsVertical className="text-3xl" />
                </div>
            </div>
            <div className="h-full overflow-y-auto p-4 flex flex-col">
                {messages.map((message, index) => (
                    <div key={index} className={`  ${message.sender === 'user'
                    ? 'flex justify-end'
                    : 'flex'
                    }`}>
                        <div
                            className={`inline-block p-2 m-1 rounded-lg ${message.sender === 'user'
                                ? 'bg-white text-black '
                                : 'bg-black text-white '
                                }`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 w-full flex items-center bg-white border-2 border-t-black">
                <input
                    type="text"
                    className="w-[300px] p-2 text-xl outline-none"
                    placeholder="Enter prompt"
                    value={inputText}
                    onChange={handleInputChange}
                />
                <IoSend className="text-4xl cursor-pointer" onClick={handleSendMessage} />
            </div>
        </div>
    );
};

export default Chatbot;
