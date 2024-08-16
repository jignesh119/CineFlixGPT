import React, { useEffect } from "react";
import Groq from "groq-sdk";
//openai api is too expensive

const useGroqAPI = () => {
  async function main(
    content = "explain how to use a vim based text area component in react",
  ) {
    const groq = new Groq({
      apiKey: import.meta.env.VITE_API_GROQ_API_KEY,
      dangerouslyAllowBrowser: true,
    });
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: content,
        },
      ],
      model: "llama3-8b-8192",
    });
    return chatCompletion;
  }
  const getGroqCompletion = async (content) => {
    const res = await main(content);
    return res;
  };
  return { getGroqCompletion };
};

export default useGroqAPI;
