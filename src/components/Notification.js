import React from 'react';
import { Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/UI-Slice';

export default function Notification() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  const handleClose = () => {
    dispatch(uiActions.showNotification({
      open: false,
    }));
  };

  return (
    <div>
      {notification.open && (
        <Alert onClick={handleClose} severity={notification.type}>
          {notification.message}
        </Alert>
      )}
    </div>
  );
}
