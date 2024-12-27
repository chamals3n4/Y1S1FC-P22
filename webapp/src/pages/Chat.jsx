"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User } from "lucide-react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isFirstMessage, setIsFirstMessage] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      content: input,
      role: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsFirstMessage(false);

    setTimeout(() => {
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        content:
          "I'm here to help with medical information, but please remember that this is not a substitute for professional medical advice. What would you like to know?",
        role: "assistant",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <Card className="flex-1 mx-4 my-4 border rounded-lg">
        <ScrollArea className="h-[calc(100vh-180px)] p-4">
          {isFirstMessage ? (
            <div className="flex flex-col items-center p-10 justify-center h-full text-center">
              <div className="mb-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    draggable="false"
                  />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
              </div>
              <h1 className="text-2xl  font-serif  mb-2">
                Welcome to Medical Chat
              </h1>
              <p className="text-muted-foreground mb-4">
                Ask anything about your medical conditions
              </p>
              <p className="text-sm text-muted-foreground max-w-md">
                Please note: This chat provides general information and is not a
                substitute for professional medical advice, diagnosis, or
                treatment.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Avatar className="h-8 w-8">
                    {message.role === "user" ? (
                      <>
                        <AvatarImage
                          src="/placeholder.svg?height=32&width=32"
                          alt="User Avatar"
                        />
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </>
                    ) : (
                      <>
                        <AvatarImage
                          src="/placeholder.svg?height=32&width=32"
                          alt="Assistant Avatar"
                        />
                        <AvatarFallback>
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </>
                    )}
                  </Avatar>
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
        <div className="p-4 border-t">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              placeholder="Type your medical question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="bg-bgsidebar">
              <Send className="h-4  w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
