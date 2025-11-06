export default function Home() {
  const messages = [
    { id: 1, user: "bob", text: "Hey Fred! How's it going?", timestamp: "10:30 AM" },
    { id: 2, user: "fred", text: "Hey Bob! Pretty good, just working on some code. You?", timestamp: "10:31 AM" },
    { id: 3, user: "bob", text: "Same here! I'm trying to figure out this Next.js setup.", timestamp: "10:32 AM" },
    { id: 4, user: "fred", text: "Oh nice! Next.js is awesome. What are you building?", timestamp: "10:33 AM" },
    { id: 5, user: "bob", text: "A chat application, actually! This is just a demo though.", timestamp: "10:34 AM" },
    { id: 6, user: "fred", text: "That's cool! Make sure to add some good styling with Tailwind.", timestamp: "10:35 AM" },
    { id: 7, user: "bob", text: "Definitely! The color scheme looks pretty good already.", timestamp: "10:36 AM" },
    { id: 8, user: "fred", text: "Agreed! Keep up the good work! 👍", timestamp: "10:37 AM" },
  ];

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
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.user === "bob" ? "justify-start" : "justify-end"}`}
            >
              <div
                className="max-w-xs md:max-w-md rounded-lg p-3 shadow"
                style={{
                  backgroundColor: message.user === "bob" ? '#8794aa' : '#53b0fd',
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
              placeholder="Messages are hardcoded (read-only)"
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
