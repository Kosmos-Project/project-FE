import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function ConfirmModal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" size="large" onClick={handleClickOpen}>
        비밀번호 변경
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">비밀번호 변경</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField
              id="outlined-password-input"
              label="현재 비밀번호"
              type="password"
              autoComplete="current-password"
            />
          </DialogContentText>
          <DialogContentText>
            <TextField
              id="outlined-password-input"
              label="비밀번호"
              type="password"
              autoComplete="current-password"
            />
          </DialogContentText>
          <DialogContentText>
            <TextField
              id="outlined-password-input"
              label="비밀번호 확인"
              type="password"
              autoComplete="current-password"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleClose} autoFocus>
            변경
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
