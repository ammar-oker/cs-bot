import { useEffect } from 'react';
import Fuse from 'fuse.js';
import intentsJson from '../../../assets/intents.json';
import Message from '../../../types/Message';
import Intent from '../../../types/Intent';

const intents = intentsJson as Intent[];
const fuse = new Fuse(intents, {
  minMatchCharLength: 2,
  threshold: 0.4,
  keys: ['trainingData.expressions.text'],
});

const getBotReply = (message: string) => {
  const [result] = fuse.search(message);

  if (result) {
    return result.item.reply.text;
  }

  return "Sorry, I didn't get that.";
};

interface useChatBotProps {
  messages: Message[];
  onBotMessage: (m: Message) => void;
}

const useChatBot = ({ messages, onBotMessage }: useChatBotProps) => {
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (messages.length && lastMessage.from === 'me') {
      onBotMessage({ from: 'bot', body: getBotReply(lastMessage.body) });
    }
  }, [messages, onBotMessage]);
};

export default useChatBot;
