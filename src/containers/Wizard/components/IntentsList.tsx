import { useEffect, useMemo, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import intentsJson from '../../../assets/intents.json';
import Intent from '../../../types/Intent';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import IntentsDetailsModal from './IntentsDetailsModal';

const intents = intentsJson as Intent[];

const IntentsList = () => {
  const [checked, setChecked] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [intentDetails, setIntentsDetails] = useState<Intent | null>(null);

  const indeterminate = useMemo(
    () => checked.length !== 0 && checked.length !== intents.length,
    [checked],
  );

  useEffect(() => {
    if (selectAll) {
      setChecked(intents.map(item => item.id));
    } else {
      setChecked([]);
    }
  }, [selectAll]);

  useEffect(() => {
    if (checked.length === intents.length) {
      setSelectAll(true);
    } else if (checked.length === 0) {
      setSelectAll(false);
    }
  }, [checked]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <FormGroup>
        <FormControlLabel
          label="Select All"
          control={
            <Checkbox
              checked={selectAll}
              indeterminate={indeterminate}
              tabIndex={-1}
              disableRipple
              data-testid="select-all-checkbox"
              onChange={(_, v) => {
                setSelectAll(v);
              }}
            />
          }
        />
      </FormGroup>

      <IntentsDetailsModal intent={intentDetails} setOpen={setIntentsDetails} />

      <List>
        {intents.map(intent => {
          const { id, name, description, trainingData, reply } = intent;
          const labelId = `checkbox-list-label-${id}`;

          return (
            <ListItem
              key={id}
              secondaryAction={
                <Tooltip title="More info">
                  <IconButton
                    edge="end"
                    aria-label="info"
                    color="primary"
                    onClick={() => {
                      setIntentsDetails(intent);
                    }}
                  >
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(id)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    data-testid="intend-checkbox"
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography component="span">
                      <strong>{name}</strong> - <small>{description}</small>
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography fontSize="0.8rem" component="span">
                        <strong>User:</strong>{' '}
                        {trainingData.expressions[0].text}
                      </Typography>

                      <br />

                      <Typography fontSize="0.8rem" component="span">
                        <strong>Bot:</strong> {reply.text}
                      </Typography>
                    </>
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default IntentsList;
