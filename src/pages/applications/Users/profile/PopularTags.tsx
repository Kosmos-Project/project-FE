import {
  Card,
  CardHeader,
  Divider,
  List,
  useTheme,
  styled
} from '@mui/material';
import PopularTagItem from './PopularTagItem';

const ListWrapper = styled(List)(
  () => `
      .MuiListItem-root {
        border-radius: 0;
        margin: 0;
      }
`
);

function PopularTags() {
  return (
    <Card sx={{ height: '50%' }}>
      <CardHeader title="관심있는 검색어" />
      <Divider />
      <ListWrapper disablePadding>
        <PopularTagItem />
        {/* 마지막인지 체크하고 Divider 유/무 결정 */}
        <Divider />
        <PopularTagItem />
        <Divider />
        <PopularTagItem />
        <Divider />
        <PopularTagItem />
      </ListWrapper>
    </Card>
  );
}

export default PopularTags;
