'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Message {
  id: number;
  user: string;
  text: string;
  timestamp: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messagesQuery = query(
          collection(db, 'messages'),
          orderBy('id', 'asc')
        );
        const querySnapshot = await getDocs(messagesQuery);
        const messagesData = querySnapshot.docs.map((doc) => ({
          id: doc.data().id,
          user: doc.data().user,
          text: doc.data().text,
          timestamp: doc.data().timestamp,
        })) as Message[];
        setMessages(messagesData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center p-4" style={{ backgroundColor: '#0b0d12' }}>
      <div className="w-full max-w-2xl rounded-lg shadow-xl overflow-hidden" style={{ backgroundColor: '#0b0d12' }}>
        {/* Chat Header */}
        <div className="p-4" style={{ backgroundColor: '#53b0fd' }}>
          <h1 className="text-xl font-semibold" style={{ color: '#ffffff' }}>Chat Room</h1>
          <p className="text-sm" style={{ color: '#ffffff', opacity: 0.9 }}>Bob and Fred</p>
        </div>

        {/* Chat Messages */}
        <div className="h-[600px] overflow-y-auto p-4 space-y-4">
          {loading && (
            <div className="flex items-center justify-center h-full">
              <p style={{ color: '#8794aa' }}>Loading messages...</p>
            </div>
          )}
          {error && (
            <div className="flex items-center justify-center h-full">
              <p style={{ color: '#ff6b6b' }}>Error: {error}</p>
            </div>
          )}
          {!loading && !error && messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.user === "bob" ? "justify-start" : "justify-end"}`}
            >
              <div
                className="max-w-xs md:max-w-md rounded-lg p-3 shadow"
                style={{
                  backgroundColor: message.user === "bob" ? '#4a5264' : '#2d7bc5',
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm capitalize" style={{ color: '#ffffff' }}>
                    {message.user}
                  </span>
                  <span className="text-xs" style={{ color: '#ffffff', opacity: 0.7 }}>
                    {message.timestamp}
                  </span>
                </div>
                <p style={{ color: '#ffffff' }}>
                  {message.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input (Disabled/Placeholder) */}
        <div className="p-4" style={{ borderTop: '1px solid #8794aa' }}>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message (read-only demo)"
              disabled
              className="flex-1 rounded-lg px-4 py-2 cursor-not-allowed"
              style={{
                backgroundColor: '#0b0d12',
                border: '1px solid #8794aa',
                color: '#8794aa',
              }}
            />
            <button
              disabled
              className="px-6 py-2 rounded-lg opacity-50 cursor-not-allowed"
              style={{
                backgroundColor: '#53b0fd',
                color: '#ffffff',
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
