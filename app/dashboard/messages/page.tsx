'use client';

import React, { useState } from 'react';
import { 
  MessageSquare, Send, User, CheckCircle2, 
  Paperclip, Clock, Calendar, Sparkles, AlertCircle, PhoneCall 
} from 'lucide-react';
import { COACHES } from '@/lib/constants';

interface Message {
  id: string;
  sender: 'coach' | 'athlete';
  senderName: string;
  text: string;
  timestamp: string;
  category?: 'feedback' | 'plan-change' | 'general';
}

export default function CoachMessagesPage() {
  const [selectedCoach, setSelectedCoach] = useState<string>(COACHES[0].id);
  const [inputText, setInputText] = useState<string>('');

  const [conversation, setConversation] = useState<Message[]>([
    {
      id: 'm-1',
      sender: 'coach',
      senderName: 'Sunil Menon',
      text: 'Vijay, reviewed your 21km aerobic long run from Sunday. Your cardiac drift was under 3.8% across the entire 100 minutes—that indicates solid mitochondrial efficiency. Keep your hydration electrolytes at 750mg sodium/liter for this week.',
      timestamp: 'Yesterday at 04:30 PM',
      category: 'feedback'
    },
    {
      id: 'm-2',
      sender: 'athlete',
      senderName: 'Vijay Raghavan',
      text: 'Thanks Coach! Legs felt noticeably fresher post-run than 3 weeks ago. For Wednesday’s 5x 1km compromised intervals with Coach Rashmi, should I hold 4:20/km or push to 4:15/km?',
      timestamp: 'Yesterday at 06:15 PM'
    },
    {
      id: 'm-3',
      sender: 'coach',
      senderName: 'Sunil Menon',
      text: 'Hold 4:20/km strictly on the first 3 reps. The focus is rapid lactate buffering post-sled push, not burning matches early. If rep 4 feels controlled at 165 bpm, you can open up rep 5 to 4:12/km.',
      timestamp: 'Today at 07:10 AM',
      category: 'plan-change'
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: 'athlete',
      senderName: 'Vijay Raghavan',
      text: inputText,
      timestamp: 'Just now'
    };

    setConversation([...conversation, newMsg]);
    setInputText('');

    // Simulate instant coach acknowledgment
    setTimeout(() => {
      const coachReply: Message = {
        id: `msg-reply-${Date.now()}`,
        sender: 'coach',
        senderName: COACHES.find(c => c.id === selectedCoach)?.name || 'Head Coach',
        text: 'Received Vijay. Analyzing your splits and updating your TrainingPeaks microcycle notes.',
        timestamp: 'Just now',
        category: 'general'
      };
      setConversation((prev) => [...prev, coachReply]);
    }, 1200);
  };

  const activeCoach = COACHES.find(c => c.id === selectedCoach) || COACHES[0];

  return (
    <div className="space-y-6 max-w-6xl mx-auto h-[calc(100vh-140px)] flex flex-col">
      {/* Top Header */}
      <div className="p-5 rounded-3xl bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-[#76C043]/30 shadow-sm flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-[#76C043]/15 text-[#1b5e20] dark:text-[#8ff346] flex items-center justify-center font-bold text-lg border border-[#76C043]/30">
            {activeCoach.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-heading font-black text-lg text-zinc-900 dark:text-white">{activeCoach.name}</h1>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#1b5e20] dark:text-[#8ff346] bg-[#76C043]/15 px-2 py-0.5 rounded-full font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#76C043] animate-pulse" /> Available
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-[#788e7a] font-mono truncate max-w-md">
              {activeCoach.role} &bull; {activeCoach.experience}
            </p>
          </div>
        </div>

        {/* Coach Selector */}
        <div className="flex items-center gap-2">
          <select
            value={selectedCoach}
            onChange={(e) => setSelectedCoach(e.target.value)}
            className="p-2.5 rounded-xl border border-zinc-300 dark:border-white/10 bg-zinc-50 dark:bg-black text-xs text-zinc-800 dark:text-white font-bold outline-none focus:border-[#76C043]"
          >
            {COACHES.map((c) => (
              <option key={c.id} value={c.id}>
                Coach: {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Chat Thread Panel */}
      <div className="flex-1 min-h-0 p-6 rounded-3xl bg-white dark:bg-[#070d09] border border-zinc-200 dark:border-white/10 shadow-sm flex flex-col justify-between overflow-hidden">
        {/* Messages Scroll Area */}
        <div className="overflow-y-auto space-y-4 pr-2">
          {conversation.map((msg) => {
            const isMe = msg.sender === 'athlete';
            return (
              <div key={msg.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                <div className="flex items-center gap-2 mb-1 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="font-bold">{msg.senderName}</span>
                  <span>&bull;</span>
                  <span>{msg.timestamp}</span>
                </div>

                <div
                  className={`max-w-xl p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                    isMe
                      ? 'bg-[#76C043] text-black font-medium rounded-tr-none'
                      : 'bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-[#d1ded2] rounded-tl-none font-normal'
                  }`}
                >
                  {msg.category === 'feedback' && (
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#1b5e20] dark:text-[#8ff346] bg-emerald-500/10 dark:bg-emerald-500/20 px-2 py-0.5 rounded mb-2 block w-fit border border-emerald-500/30">
                      <Sparkles className="w-3 h-3" /> Post-Workout Analysis
                    </div>
                  )}
                  {msg.category === 'plan-change' && (
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-500/20 px-2 py-0.5 rounded mb-2 block w-fit border border-amber-500/30">
                      <Clock className="w-3 h-3" /> Pacing Adjustment Directive
                    </div>
                  )}
                  {msg.text}
                </div>
              </div>
            );
          })}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSendMessage} className="pt-4 border-t border-zinc-200 dark:border-white/10 flex items-center gap-3">
          <input
            type="text"
            placeholder="Type your question, heart rate check, or split query for the coach..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 p-3.5 rounded-2xl border border-zinc-300 dark:border-white/10 bg-zinc-50 dark:bg-black text-xs sm:text-sm text-zinc-900 dark:text-white focus:border-[#76C043] outline-none"
          />
          <button
            type="submit"
            className="p-3.5 rounded-2xl bg-[#76C043] hover:bg-[#8ff346] text-black font-extrabold shadow-md transition-all flex items-center justify-center shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
