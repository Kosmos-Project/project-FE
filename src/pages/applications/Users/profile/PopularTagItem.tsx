import { List, ListItem, ListItemText, useTheme, styled } from '@mui/material';

const PopularTagItem = () => {
  const theme = useTheme();
  return (
    <ListItem
      sx={{
        color: `${theme.colors.primary.main}`,
        '&:hover': { color: `${theme.colors.primary.dark}` }
      }}
      button
    >
      <ListItemText primary="#investorsWatch2022" />
    </ListItem>
  );
};

export default PopularTagItem;
