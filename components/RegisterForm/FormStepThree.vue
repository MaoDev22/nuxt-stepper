<template>
  <div class="container-form">
    <h3>Preferencias y términos</h3>
    <form @submit.prevent="nextStep">
      <div><input type="checkbox" v-model="formData.terms" required /> Terminos y condiciones</div>
      
      <button type="submit" :disabled="loading">{{ loading ? 'Enviando...' : (readyToSend ? 'Enviar' : 'Siguiente') }}</button>
    </form>
  </div>
</template>

<script setup>
import useFormData from '@composables/useStepperData'

const { formData, nextStep, readyToSend, loading } = useFormData();
</script>
