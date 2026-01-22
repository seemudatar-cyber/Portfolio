
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, PERSONAL_INFO, SKILLS } from '../constants';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "I am Seema's AI Executive Proxy. I can provide detailed insights into her professional background or assist with the technical transition of this portfolio to a professional environment like Replit. How can I assist you?" }
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

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        You are the "AI Executive Proxy" for ${PERSONAL_INFO.name}.
        
        MISSION: Represent Seema professionally. 
        NEW CAPABILITY: You can also help with "Deployment" or "Migration" questions for this site.
        
        IF USER ASKS ABOUT REPLIT/NETLIFY/DEPLOYMENT:
        1. Explain that they need to copy the package.json, vite.config.ts, and App.tsx into a new React project.
        2. Remind them to add the API_KEY to the "Secrets" or "Environment Variables" section.
        3. Professional tone is mandatory.

        CONTEXT:
        - Moto: ${PERSONAL_INFO.tagline}
        - Current: Senior Staff VP at JPMorgan
        - Expertise: Payments, SOX, Global Scale.

        User Question: ${userMsg}
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setMessages(prev => [...prev, { role: 'model', content: response.text || "I apologize, I am unable to access the profile at this moment." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', content: "Connection error. Please try again shortly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-[350px] md:w-[420px] h-[580px] bg-[#0d1b2a] border border-blue-500/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="p-5 bg-gradient-to-r from-[#1b263b] to-[#415a77] flex justify-between items-center shadow-lg border-b border-white/5">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-lg border border-blue-400/30 text-blue-100">SD</div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0d1b2a]" />
              </div>
              <div>
                <p className="font-bold text-sm leading-tight text-white">Executive Liaison</p>
                <p className="text-[10px] text-blue-200/70 uppercase tracking-widest">Transition Protocol Ready</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#0a1128]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none border border-white/10' 
                    : 'bg-white/5 text-blue-100 rounded-tl-none border border-blue-500/10 backdrop-blur-sm'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-tl-none border border-blue-500/10 flex space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-[#0d1b2a] border-t border-white/5">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about leadership or deployment..."
                className="w-full bg-[#1b263b] border border-blue-500/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-blue-400/50 transition-all placeholder:text-gray-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 p-2 text-blue-400 hover:text-blue-300 disabled:opacity-50 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
              </button>
            </div>
            <p className="text-[10px] text-blue-300/40 mt-3 text-center italic uppercase tracking-widest font-bold">Migration Support System</p>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group flex items-center space-x-3 bg-blue-600 hover:bg-blue-500 text-white pl-6 pr-4 py-4 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border border-blue-400/30"
        >
          <span className="font-bold text-sm tracking-tight uppercase">Strategic Support</span>
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
