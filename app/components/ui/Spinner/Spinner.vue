<template>
  <div class="spinner"></div>
</template>

<style scoped>
.spinner {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 4px solid transparent;
  border-radius: 50%;
  border-top-color: #3b82f6;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
