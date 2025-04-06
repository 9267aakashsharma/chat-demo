// this returns mock data for the chat with given chat id
function getChat(chatId: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: chatId,
        messages: [
          {
            id: 1,
            text: "Hello, how can I help you?",
            sender: "bot",
            timestamp: new Date().toISOString(),
          },
          {
            id: 2,
            text: "I have a question about my order.",
            sender: "user",
            timestamp: new Date().toISOString(),
          },
        ],
      });
    }, 1000);
  });
}

export { getChat };
