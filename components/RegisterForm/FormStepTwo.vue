<template>
  <div class="container-form">
    <h3>Información de contacto</h3>
    <form @submit.prevent="nextStep">
      <div class="form-control">
        <label>Teléfono:</label>
        <input type="number" v-model="formData.phone" placeholder="Número de teléfono" required />
      </div>

      <div class="form-control">
        <label>Dirección:</label>
        <input type="text" v-model="formData.address" placeholder="Dirección" required />
      </div>

      <button type="submit" :disabled="loading">{{ loading ? 'Enviando...' : readyToSend ? 'Enviar' : 'Siguiente' }}</button>
    </form>
  </div>
</template>

<script setup>
import useFormData from '@composables/useStepperData'

const { formData, nextStep, readyToSend, loading } = useFormData();
</script>
