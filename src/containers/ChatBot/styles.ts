import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

export const StyledMessagesBody = styled('div')`
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  margin: 0 auto 1rem;
  padding: 0.5rem 1.5rem;
`;

export const StyledMessage = styled(Card)`
  border-radius: 1.15rem;
  line-height: 1.25;
  max-width: 75%;
  padding: 0.5rem 0.875rem;
  position: relative;
  word-wrap: break-word;
  margin: 0.5rem 0;
  width: fit-content;
  overflow: visible;

  &::before,
  &::after {
    bottom: -0.1rem;
    content: '';
    height: 1rem;
    position: absolute;
  }
`;

export const MessageFromMe = styled(StyledMessage)`
  align-self: flex-end;
  background-color: #248bf5;
  color: #fff;
  box-shadow: none;

  &::before {
    border-bottom-left-radius: 0.8rem 0.7rem;
    border-right: 1rem solid #248bf5;
    right: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  &::after {
    background-color: #fff;
    border-bottom-left-radius: 0.5rem;
    right: -40px;
    transform: translate(-30px, -2px);
    width: 10px;
  }
`;

export const MessageFromBot = styled(StyledMessage)`
  box-shadow: none;
  align-items: flex-start;
  background-color: #e5e5ea;
  color: #000;

  &:before {
    border-bottom-right-radius: 0.8rem 0.7rem;
    border-left: 1rem solid #e5e5ea;
    left: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  &::after {
    background-color: #fff;
    border-bottom-right-radius: 0.5rem;
    left: 20px;
    transform: translate(-30px, -2px);
    width: 10px;
  }
`;
