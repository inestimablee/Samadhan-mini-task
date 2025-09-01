import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Plus, Minus } from "lucide-react";

export default function CounterChat() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (message.trim() !== "") {
      setChat([...chat, { id: Date.now(), text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">
      {/* Counter Section */}
      <Card className="shadow-lg rounded-2xl p-4">
        <CardContent className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold">Counter</h2>
          <p className="text-3xl font-mono">{count}</p>
          <div className="flex gap-3">
            <Button onClick={() => setCount(count - 1)} variant="outline">
              <Minus size={18} />
            </Button>
            <Button onClick={() => setCount(count + 1)}>
              <Plus size={18} />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Live Chat Section */}
      <Card className="shadow-lg rounded-2xl p-4">
        <CardContent className="flex flex-col h-80">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <MessageCircle size={20} /> Live Chat Preview
          </h2>

          {/* Chat Box */}
          <div className="flex-1 overflow-y-auto mt-3 space-y-2 bg-gray-50 p-3 rounded-lg">
            {chat.length === 0 ? (
              <p className="text-gray-400 text-sm">No messages yet...</p>
            ) : (
              chat.map((msg) => (
                <div
                  key={msg.id}
                  className="bg-blue-100 text-blue-800 px-3 py-2 rounded-xl w-fit max-w-xs"
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>

          {/* Input Area */}
          <div className="flex gap-2 mt-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none"
            />
            <Button onClick={sendMessage}>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
