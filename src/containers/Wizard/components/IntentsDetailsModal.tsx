import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Intent from '../../../types/Intent';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import ChatBody from '../../ChatBot/components/ChatBody';
import Message from '../../../types/Message';
import * as S from '../styles';

interface IntentsDetailsModalProps {
  intent: Intent | null;
  setOpen: (intent: Intent | null) => void;
}

const IntentsDetailsModal = ({ intent, setOpen }: IntentsDetailsModalProps) => {
  const messages: Message[] = intent
    ? [
        ...intent?.trainingData.expressions.map<Message>(exp => ({
          from: 'me',
          body: exp.text,
        })),
        { from: 'bot', body: intent?.reply.text || '' },
      ]
    : [];

  return (
    <Modal
      open={!!intent}
      onClose={() => {
        setOpen(null);
      }}
    >
      <S.StyledModal>
        <Card>
          <CardHeader
            title={intent?.name}
            subheader={
              <Typography variant="subtitle2">{intent?.description}</Typography>
            }
          />
          <CardContent>
            <Typography>
              <strong>Bot will reply</strong> "{intent?.reply.text}"
            </Typography>

            <Typography>
              <strong>Total expirations</strong>{' '}
              {intent?.trainingData.expressionCount}
            </Typography>

            <Typography fontWeight="bold" py={1}>
              Examples
            </Typography>
            <ChatBody messages={messages} />
          </CardContent>
        </Card>
      </S.StyledModal>
    </Modal>
  );
};

export default IntentsDetailsModal;
