import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Postcode from 'src/utils/Postcode';

const theme = createTheme();

const SignUp: React.FC = () => {
  const [zoneCode, setZoneCode] = useState();
  const [address, setAddress] = useState();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
  };

  console.log('zoneCode, address', zoneCode, address);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일 주소"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="이름"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="nickname"
                  required
                  fullWidth
                  id="nickname"
                  label="닉네임"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="비밀번호 확인"
                  type="password"
                  id="password2"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder="우편번호"
                  name="email"
                  value={zoneCode}
                />
              </Grid>
              <Postcode setZoneCode={setZoneCode} setAddress={setAddress} />
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder="주소"
                  name="email"
                  value={address}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="상세 주소를 입력해 주세요"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              회원가입
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">
                  <a>계정이 이미 있으신가요?</a>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
