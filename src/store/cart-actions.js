import { uiActions } from './UI-Slice';
import { cartActions } from './cartSlice';

export const fetchData = () => async (dispatch) => {
  const fetchHandler = async () => {
    const response = await fetch('https://shop-fccce-default-rtdb.firebaseio.com/cartItems.json');
    const data = await response.json();
    return data;
  };
  try {
    const cartData = await fetchHandler();
    dispatch(cartActions.replaceData(cartData));
  } catch (error) {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: 'sending request to fetch Data failed',
        type: 'error',
      }),
    );
  }
};

export const sendCartData = (cart) => async (dispatch) => {
  dispatch(
    uiActions.showNotification({
      open: true,
      message: 'Sending request',
      type: 'warning',
    }),
  );

  const sendRequest = async () => {
    try {
      const response = await fetch(
        'https://shop-fccce-default-rtdb.firebaseio.com/cartItems.json',
        {
          method: 'put',
          body: JSON.stringify(cart),
        },
      );

      if (response.ok) {
        dispatch(
          uiActions.showNotification({
            open: true,
            message: 'The request was successful',
            type: 'success',
          }),
        );
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'The request was not successful',
          type: 'error',
        }),
      );
    }
  };

  await sendRequest();
};
