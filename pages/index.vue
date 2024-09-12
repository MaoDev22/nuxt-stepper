<template>
  <div class="general-container-stepper">
    <div>
      <div class="success-alert" v-if="success">El usuario se ha creado correctamente</div>
      <div class="error-alert" v-if="error">Error al crear usuario</div>
      <ControlSteper />
      <component :is="currentStepComponent" />
    </div>
  </div>
</template>

<script setup>
import useFormData from '@composables/useStepperData'
import FormStepOne from '@components/RegisterForm/FormStepOne.vue'
import FormStepTwo from '@components/RegisterForm/FormStepTwo.vue'
import FormStepThree from '@components/RegisterForm/FormStepThree.vue'
import ControlSteper from '@components/ControlSteper.vue'

const { steps, currentStep, currentStepComponent, success, error } = useFormData();
steps.value = [FormStepOne, FormStepTwo, FormStepThree];
</script>