import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi there! I am Samir's AI Agent. I can answer questions about his skills, education, projects (OmniServe, WorkLink, CineGraph RAG), and contact channels. What would you like to know?"
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const quickReplies = [
    { label: 'Tell me about OmniServe', keyword: 'omniserve' },
    { label: 'What is WorkLink?', keyword: 'worklink' },
    { label: 'What is CineGraph RAG?', keyword: 'cinegraph' },
    { label: 'What are your skills?', keyword: 'skills' }
  ];

  // Resolve matching answers
  const getResponseText = (query) => {
    const q = query.toLowerCase().trim();
    
    if (q.includes('omniserve') || q.includes('hotel') || q.includes('qr') || q.includes('dine-in')) {
      return `OmniServe is Samir's flagship B2B QR hospitality order platform. It handles dine-in table QR ordering and deliveries, syncing carts and chef ticketing in under 100ms via WebSockets and Redis.`;
    }
    if (q.includes('worklink') || q.includes('workforce') || q.includes('dispatch')) {
      return `WorkLink is Samir's AI-Powered Workforce Management Platform. It supports multi-role RBAC, wallet-driven lead management, and live notifications. Features semantic search and worker-matching using vector embeddings.`;
    }
    if (q.includes('cinegraph') || q.includes('movie') || q.includes('hybrid rag')) {
      return `CineGraph RAG is Samir's hybrid RAG pipeline combining Vector DB (Pinecone) and Graph DB (Neo4j) with LangChain, LangGraph, and the Gemini API for context-grounded movie Q&A.`;
    }
    if (q.includes('skills') || q.includes('tech') || q.includes('stack') || q.includes('languages')) {
      return `Samir specializes in JavaScript, TypeScript, React, Node.js, Express, MongoDB, and Redis. He also builds agentic AI pipelines using RAG, LangGraph, and the Gemini API.`;
    }
    if (q.includes('education') || q.includes('college') || q.includes('ies') || q.includes('gpa')) {
      return `Samir is studying B.Tech in CSE at IES College of Technology, Bhopal, maintaining an 8.39 CGPA. He was the academic Branch Topper in Semesters 3 (8.59 GPA) and 5 (9.29 GPA).`;
    }
    if (q.includes('experience') || q.includes('job') || q.includes('intern')) {
      return `Samir has 1 year of experience as the Founder of OmniServe, a developer of agritech systems, and as a Virtual Full Stack Intern at eduTech.`;
    }
    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('write')) {
      return `You can reach Samir directly via email at ersamirsingh@gmail.com, or schedule a booking slot directly in the Contact section!`;
    }
    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      return `Samir's resume is available for download in the navbar or via the CTA buttons in the Hero section. It covers MERN architecture, AI pipelines, and competitive coding accolades.`;
    }
    return `I am trained on Samir's profile indices. Try asking about "OmniServe", "WorkLink", "CineGraph RAG", "skills", "experience", "education", or choose one of the quick replies below!`;
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    
    // User message
    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      setIsTyping(false);
      const botMsg = { sender: 'bot', text: getResponseText(text) };
      setMessages((prev) => [...prev, botMsg]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[150] select-none text-left">
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 cursor-pointer hover:bg-primary/95 transition-all relative"
        aria-label="Toggle chat widget"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <FiX className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
              <FiMessageSquare className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-theme-card border border-theme rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[500px]"
          >
            {/* Header */}
            <div className="bg-theme-surface p-4 border-b border-theme flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
                <div>
                  <h4 className="font-display font-bold text-sm text-body">Samir's AI Agent</h4>
                  <span className="text-[9px] font-mono text-muted uppercase">Online • RAG Indexer</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted hover:text-body p-1"
              >
                <FiX />
              </button>
            </div>

            {/* Message Body Container */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-[300px]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-primary text-white rounded-tr-none'
                        : 'bg-theme-surface border border-theme text-body rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing Animation */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="p-3 rounded-2xl bg-theme-surface border border-theme text-muted text-xs rounded-tl-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick replies */}
            <div className="px-4 py-2 border-t border-theme/60 bg-theme-surface/30 flex flex-wrap gap-1.5">
              {quickReplies.map((reply, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(reply.keyword)}
                  className="px-2.5 py-1 rounded-full border border-theme bg-theme-surface hover:bg-theme-surface/80 text-[10px] text-muted hover:text-body transition-colors cursor-pointer"
                >
                  {reply.label}
                </button>
              ))}
            </div>

            {/* Input Form Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputVal);
              }}
              className="p-3.5 border-t border-theme bg-theme-surface flex gap-2"
            >
              <input
                type="text"
                placeholder="Ask me a question..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg bg-theme-card border border-theme text-xs text-body placeholder:text-muted/50 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="p-2.5 rounded-lg bg-primary hover:bg-primary/95 text-white flex items-center justify-center shadow-md shadow-primary/10 cursor-pointer"
                aria-label="Send query"
              >
                <FiSend />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
