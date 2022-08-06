import { Typography } from '@mui/material';

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };

  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        계정 설정
      </Typography>
      <Typography variant="subtitle2">
        {user.name}님, 이 곳에서 계정 관련 설정을 할 수 있습니다.
      </Typography>
    </>
  );
}

export default PageHeader;
