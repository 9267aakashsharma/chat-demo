import { useParams } from "react-router";

function Chat() {
  const { chatId } = useParams<{
    chatId: string;
  }>();

  return (
    <div>
      <h1>Chat</h1>
      <p>{chatId}</p>
    </div>
  );
}

export default Chat;
