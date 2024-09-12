<template>
  <div class="container-form">
    <h3>Información personal</h3>
    <form @submit.prevent="nextStep">
      <div class="form-control">
        <label>Nombre:</label>
        <input type="text" v-model="formData.name" placeholder="Nombre completo" required />
      </div>

      <div class="form-control">
        <label>Correo:</label>
        <input type="email" v-model="formData.email" placeholder="Correo electrónico" required />
      </div>

      <div class="form-control">
        <label>Contraseña:</label>
        <input type="password" v-model="formData.password" placeholder="Contraseña" required />
      </div>
      
      <button type="submit" :disabled="loading">{{ loading ? 'Enviando...' : readyToSend ? 'Enviar' : 'Siguiente' }}</button>
    </form>
  </div>
</template>

<script setup>
import useFormData from '@composables/useStepperData';

const { formData, nextStep, readyToSend, loading } = useFormData();

</script>
