
import React, { useState, useRef, useEffect } from 'react';
import { chatWithAI } from '../services/geminiService';
import { Message } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Pooja's AI assistant. You can ask me about her experience at CoffeeWeb, her skills in React/Node, or her favorite projects like Chat MERN App!", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.slice(-6).map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const aiResponse = await chatWithAI(input, history);
      const modelMessage: Message = { role: 'model', text: aiResponse || "I'm sorry, I encountered a slight issue. Could you try again?", timestamp: new Date() };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm offline right now. Please make sure the API key is configured.", timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-chat" className="py-24 bg-white dark:bg-slate-950 transition-colors scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">
            Smart <span className="text-indigo-600 dark:text-blue-400">Assistant</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-medium italic">Ask anything about my professional background and skills.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[700px] border-b-[12px] border-b-indigo-600 dark:border-b-blue-600">
          {/* Header */}
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 dark:bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/20">PS</div>
              <div>
                <span className="text-base font-black text-slate-900 dark:text-slate-100 block tracking-tight">Pooja AI Bot</span>
                <span className="text-[10px] text-green-600 dark:text-green-500 flex items-center gap-1.5 font-black uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  System Operational
                </span>
              </div>
            </div>
            <div className="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-400 border border-slate-100 dark:border-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 bg-slate-50/30 dark:bg-slate-900/10">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-[1.5rem] px-6 py-4 text-sm font-medium leading-relaxed shadow-sm transition-transform duration-300 ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-indigo-200 dark:shadow-none translate-y-2' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200 dark:border-slate-800'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 text-slate-400 rounded-[1.5rem] rounded-tl-none border border-slate-200 dark:border-slate-800 px-6 py-4 text-sm font-bold animate-pulse flex items-center gap-3 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  Analyzing profile...
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-8 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="relative group">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my tech stack or projects..."
                className="w-full bg-slate-50 dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 text-sm font-semibold focus:outline-none focus:border-indigo-500 dark:focus:border-blue-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 pr-16"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-2 bottom-2 bg-indigo-600 dark:bg-blue-600 hover:bg-indigo-700 dark:hover:bg-blue-500 text-white px-5 rounded-xl font-black transition-all flex items-center justify-center disabled:opacity-50 shadow-md transform active:scale-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
