import React, { FormEventHandler, useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendRounded from '@mui/icons-material/SendRounded';
import Message from '../../../types/Message';

interface ChatFormProps {
  onMessage: (m: Message) => void;
}

const ChatForm = ({ onMessage }: ChatFormProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    if (message) {
      onMessage({ from: 'me', body: message });
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack width="100%" direction="row" spacing={2} alignItems="center">
        <TextField
          value={message}
          fullWidth
          variant="outlined"
          autoComplete="off"
          placeholder="write a message"
          onChange={e => {
            setMessage(e.currentTarget.value);
          }}
        />

        <IconButton size="large" color="primary" type="submit">
          <SendRounded fontSize="large" />
        </IconButton>
      </Stack>
    </form>
  );
};

export default ChatForm;
