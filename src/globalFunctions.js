// src/utils/globalFunctions.js
import { ref } from 'vue';

const isLoading = ref(false);
const errorMessage = ref('');

const showLoader = () => {
  isLoading.value = true;
  errorMessage.value = '';
};

const hideLoader = () => {
  isLoading.value = false;
};

const showError = (message) => {
  errorMessage.value = message;
  hideLoader();
};

export default {
  isLoading,
  errorMessage,
  showLoader,
  hideLoader,
  showError,
};
