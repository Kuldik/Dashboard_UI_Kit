import { toast } from 'react-toastify';

const useCustomToast = () => {
  const showToast = (type: 'success' | 'info' | 'warning' | 'error', message: string) => {
    toast(message, { type });
  };

  return { showToast };
};

export default useCustomToast;