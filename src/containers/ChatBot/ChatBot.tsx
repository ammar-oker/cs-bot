import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import ChatBody from './components/ChatBody';
import ChatForm from './components/ChatForm';
import Message from '../../types/Message';
import useChatBot from './hooks/useChatBot';

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const onMessage = (m: Message) => {
    setMessages([...messages, m]);
  };

  useChatBot({
    messages,
    onBotMessage: onMessage,
  });

  return (
    <Container sx={{ height: 'calc(100vh - 64px)' }} maxWidth="md">
      <Stack height="100%" spacing={2} py={2}>
        <ChatBody messages={messages} />
        <ChatForm onMessage={onMessage} />
      </Stack>
    </Container>
  );
};

export default ChatBot;
