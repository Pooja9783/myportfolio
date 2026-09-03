import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Message } from "../types";

const SUGGESTED_QUESTIONS = [
  "What is Pooja's experience with MERN?",
  "Tell me about her GenAI work",
  "What technologies does she work with?",
];

const API_URL = "https://portfolio-server-t2tv.onrender.com/api/chat";

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Hi, I'm Pooja's AI assistant. Ask me anything about her experience, technical skills, projects, or engineering background.",
      timestamp: new Date(),
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Automatically scroll to the latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (question?: string) => {
    const text = question || input;

    // Prevent empty messages or multiple requests
    if (!text.trim() || isLoading) return;

    // Add user message immediately
    const userMessage: Message = {
      role: "user",
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await response.json();

      // Handle backend errors
      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to get a response from Pooja AI."
        );
      }

      // Add AI response
      const aiMessage: Message = {
        role: "model",
        text: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat error:", error);

      // Show fallback message
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "I'm currently unavailable. Please try again in a moment.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-chat" className="scroll-mt-24 bg-[#0C0A09] py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-[#F97316]">
            <Sparkles size={16} />

            <p className="text-sm font-semibold uppercase tracking-[0.2em]">
              AI Assistant
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#FAFAF9] md:text-5xl">
            Ask my portfolio anything.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#A8A29E]">
            An AI-powered assistant that can answer questions about my
            experience, skills, projects, and engineering background.
          </p>
        </div>

        {/* Chat Container */}
        <div className="overflow-hidden rounded-3xl border border-[#292524] bg-[#141210]">

          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-[#292524] px-6 py-5 md:px-8">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F97316] text-[#0C0A09]">
                <Sparkles size={19} />
              </div>

              <div>
                <h3 className="font-semibold text-[#FAFAF9]">
                  Pooja AI
                </h3>

                <p className="mt-0.5 text-xs text-[#78716C]">
                  Portfolio assistant
                </p>
              </div>
            </div>

            <span className="flex items-center gap-2 text-xs text-[#A8A29E]">
              <span className="h-2 w-2 rounded-full bg-[#F97316]" />
              AI powered
            </span>
          </div>

          {/* Main Chat Area */}
          <div className="grid lg:grid-cols-[280px_1fr]">

            {/* Suggested Questions */}
            <aside className="border-b border-[#292524] p-6 lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#78716C]">
                Try asking
              </p>

              <div className="mt-5 space-y-3">
                {SUGGESTED_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    onClick={() => handleSend(question)}
                    disabled={isLoading}
                    className="w-full border-b border-[#292524] pb-3 text-left text-sm leading-6 text-[#A8A29E] transition-colors hover:text-[#F97316] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {question}

                    <ArrowUpRight
                      size={14}
                      className="mt-2 text-[#F97316]"
                    />
                  </button>
                ))}
              </div>
            </aside>

            {/* Conversation */}
            <div className="flex min-h-[500px] flex-col">

              {/* Messages */}
              <div
                ref={scrollRef}
                className="flex-1 space-y-6 overflow-y-auto p-6 md:p-8"
              >
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] text-sm leading-7 md:text-base ${
                        message.role === "user"
                          ? "border-b border-[#F97316] pb-2 text-[#FAFAF9]"
                          : "text-[#A8A29E]"
                      }`}
                    >
                      {/* Message Label */}
                      <span
                        className={`mb-2 block text-xs font-semibold uppercase tracking-wider ${
                          message.role === "user"
                            ? "text-[#F97316]"
                            : "text-[#78716C]"
                        }`}
                      >
                        {message.role === "user" ? "You" : "Pooja AI"}
                      </span>

                      {message.text}
                    </div>
                  </div>
                ))}

                {/* Loading */}
                {isLoading && (
                  <div className="text-sm text-[#78716C]">
                    <span className="text-[#F97316]">
                      Pooja AI
                    </span>{" "}
                    is thinking...
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="border-t border-[#292524] p-4 md:p-6">
                <div className="flex items-center gap-3">

                  <input
                    type="text"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        handleSend();
                      }
                    }}
                    disabled={isLoading}
                    placeholder="Ask something about Pooja..."
                    className="h-12 flex-1 bg-transparent px-3 text-sm text-[#FAFAF9] outline-none placeholder:text-[#78716C] disabled:opacity-50"
                  />

                  <button
                    onClick={() => handleSend()}
                    disabled={isLoading || !input.trim()}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F97316] text-[#0C0A09] transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Send message"
                  >
                    <ArrowUpRight size={19} />
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AIChat;