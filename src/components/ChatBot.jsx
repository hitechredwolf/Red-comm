import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);

    // --- Knowledge Base (keywords -> reply) ---
    const KB = [
        {
            patterns: [/price|pricing|cost|rate|charges?/i],
            reply: "Our prices start from ₹220. Which product are you interested in?"
        },
        {
            patterns: [/support|help|issue|problem|error/i],
            reply: "Our support team is here 24/7. Please describe the issue."
        },
        {
            patterns: [/hours|time|timing|open/i],
            reply: "We’re open Mon–Sat, 10 AM – 7 PM IST."
        },
        {
            patterns: [/location|address|where/i],
            reply: "We’re based in Noida. Need directions?"
        },
        {
            patterns: [/contact|phone|call|number/i],
            reply: "You can call us at +91-9888064333."
        },
        {
            patterns: [/warranty|guarantee/i],
            reply: "All products include a standard 1-year warranty."
        }
    ];

    const findAnswer = (text) => {
        for (const item of KB) {
            if (item.patterns.some((re) => re.test(text))) return item.reply;
        }
        return null;
    };

    // --- Auto welcome message on first open ---
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setIsTyping(true);
            setTimeout(() => {
                setMessages([{ sender: "bot", text: "👋 Hello! Welcome to Red Wolf. How can I help you?" }]);
                setIsTyping(false);
            }, 500);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    // --- Auto-scroll to bottom when messages update ---
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const sendBotReply = (text) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages((prev) => [...prev, { sender: "bot", text }]);
            setIsTyping(false);
        }, 500);
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = input.trim();
        const newMessages = [...messages, { sender: "user", text: userMsg }];
        setMessages(newMessages);
        setInput("");

        // 1) Try KB reply
        const kbReply = findAnswer(userMsg);

        if (kbReply) {
            sendBotReply(kbReply);
            return;
        }

        // 2) Fallback: simple sequential replies (your original logic)
        const userMsgCount = newMessages.filter((m) => m.sender === "user").length;
        let botReply = "";

        if (userMsgCount === 1) {
            botReply = "SORRY";
        } else if (userMsgCount === 2) {
            botReply = "⏳ Please wait, our team will respond shortly.";
        } else if (userMsgCount === 3) {
            botReply = "📞 Support Contact: +91-9888064333";
        } else {
            botReply =
                "Sorry, I didn't catch that. You can ask about price, support, warranty, timings, location, or contact.";
        }

        sendBotReply(botReply);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSend();
    };

    // --- Reset & Close ChatBot ---
    const handleClose = () => {
        setIsOpen(false);
        setMessages([]);
        setInput("");
        setIsTyping(false);
    };

    return (
        <>
            {/* Chatbot Icon */}
            {!isOpen && (
                <div className="chatbot-icon" onClick={() => setIsOpen(true)} title="Chat with us">
                    💬
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="chatbot-container shadow-lg">
                    <div className="chatbot-header">
                        <h5>Support ChatBot</h5>
                        <button className="close-btn" onClick={handleClose} aria-label="Close">
                            ✖
                        </button>
                    </div>

                    <div className="chat-window">
                        {messages.map((msg, i) => (
                            <div key={i} className={`message ${msg.sender === "user" ? "user" : "bot"}`}>
                                {msg.text}
                            </div>
                        ))}

                        {isTyping && <div className="message bot typing">Typing…</div>}
                        <div ref={chatEndRef} />
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type message..."
                            className="form-control"
                        />
                        <button onClick={handleSend} className="btn btn-primary">
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot;
