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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        {/* Chat Header */}
        <div className="bg-indigo-600 dark:bg-indigo-800 text-white p-4">
          <h1 className="text-xl font-semibold">Chat Room</h1>
          <p className="text-sm text-indigo-200">Bob and Fred</p>
        </div>

        {/* Chat Messages */}
        <div className="h-[600px] overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.user === "bob" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-xs md:max-w-md ${
                  message.user === "bob"
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "bg-indigo-500 dark:bg-indigo-600 text-white"
                } rounded-lg p-3 shadow`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm capitalize">
                    {message.user}
                  </span>
                  <span
                    className={`text-xs ${
                      message.user === "bob"
                        ? "text-gray-500 dark:text-gray-400"
                        : "text-indigo-100"
                    }`}
                  >
                    {message.timestamp}
                  </span>
                </div>
                <p className={message.user === "bob" ? "text-gray-800 dark:text-gray-100" : ""}>
                  {message.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input (Disabled/Placeholder) */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Messages are hardcoded (read-only)"
              disabled
              className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-2 text-gray-500 dark:text-gray-400 cursor-not-allowed"
            />
            <button
              disabled
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg opacity-50 cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
