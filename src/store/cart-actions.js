import { uiActions } from "./UI-Slice";
import { cartActions } from "./cartSlice";

export const fetchData = () => {
    return async(dispatch) => {
        const fetchHandler = async() =>{
            const response = await fetch ('https://shop-fccce-default-rtdb.firebaseio.com/cartItems.json');
            const data = response.json();
            return data;
        }
        try{
            const sendCartData = await fetchHandler();
            dispatch(cartActions.replaceData(cartData))
        } catch(error){
            dispatch(
                uiActions.showNotification({
                  open: true,
                  message: 'sending request to fetch Data failed',
                  type: 'error',
                })
              );
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'Sending request',
          type: 'warning',
        })
      );
  
      const sendRequest = async () => {
        try {
          // Send state as sending request
          const response = await fetch(
            'https://shop-fccce-default-rtdb.firebaseio.com/cartItems.json',
            {
              method: 'put',
              body: JSON.stringify(cart),
            }
          );
  
          if (response.ok) {
            dispatch(
              uiActions.showNotification({
                open: true,
                message: 'The request was successful',
                type: 'success',
              })
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
            })
          );
        }
      };
  
      await sendRequest();
    };
  };