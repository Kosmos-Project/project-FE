import { ChangeEvent, useState } from 'react';
import {
  Box,
  Grid,
  Radio,
  FormControlLabel,
  Typography,
  Card,
  lighten,
  Tooltip,
  IconButton,
  styled
} from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

const CardLogo = styled('img')(
  ({ theme }) => `
      border: 1px solid ${theme.colors.alpha.black[30]};
      border-radius: ${theme.general.borderRadius};
      padding: ${theme.spacing(1)};
      margin-right: ${theme.spacing(2)};
      background: ${theme.colors.alpha.white[100]};
`
);

const CardCc = styled(Card)(
  ({ theme }) => `
     border: 1px solid ${theme.colors.alpha.black[30]};
     background: ${theme.colors.alpha.black[5]};
     box-shadow: none;
`
);

const IconButtonError = styled(IconButton)(
  ({ theme }) => `
     background: ${theme.colors.error.lighter};
     color: ${theme.colors.error.main};
     padding: ${theme.spacing(0.5)};

     &:hover {
      background: ${lighten(theme.colors.error.lighter, 0.4)};
     }
`
);

const Cards = () => {
  const data = {
    savedCards: 7
  };

  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleDelete = () => {};

  return (
    <Grid item xs={12} sm={6}>
      <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
        <Box display="flex" alignItems="center">
          <CardLogo
            src="/static/images/placeholders/logo/visa.png"
            alt="Visa"
          />
          <Box>
            <Typography variant="h3" fontWeight="normal">
              •••• 6879
            </Typography>
            <Typography variant="subtitle2">
              Expires:{' '}
              <Typography component="span" color="text.primary">
                12/24
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box
          pt={3}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <FormControlLabel
            value="a"
            control={
              <Radio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                color="primary"
                name="primary-card"
              />
            }
            label="Primary"
          />
          <Tooltip arrow title="Remove this card">
            <IconButtonError onClick={() => handleDelete()}>
              <DeleteTwoToneIcon fontSize="small" />
            </IconButtonError>
          </Tooltip>
        </Box>
      </CardCc>
    </Grid>
  );
};

export default Cards;
