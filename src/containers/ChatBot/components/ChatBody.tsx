import React, { useEffect, useId, useRef } from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import botPic from '../../../assets/images/bot.svg';
import * as S from '../styles';
import Message from '../../../types/Message';

interface ChatBodyProps {
  messages: Message[];
}

const ChatBody = ({ messages }: ChatBodyProps) => {
  const id = useId();
  const scrollSentryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollSentryRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Card variant="outlined" sx={{ height: '100%', overflow: 'auto' }}>
      <S.StyledMessagesBody>
        {messages.map(({ from, body }, index) => (
          <Grow in key={`${index}-${id}`}>
            {from === 'me' ? (
              <S.MessageFromMe>{body}</S.MessageFromMe>
            ) : (
              <S.MessageFromBot>
                <Stack direction="row" spacing={1} pb={1} alignItems="center">
                  <img src={botPic} alt="bot" width="30px" height="30px" />
                  <Typography>Chat Bot</Typography>
                </Stack>
                {body}
              </S.MessageFromBot>
            )}
          </Grow>
        ))}
        <div ref={scrollSentryRef} />
      </S.StyledMessagesBody>
    </Card>
  );
};

export default ChatBody;
