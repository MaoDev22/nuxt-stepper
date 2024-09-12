<template>
   <div class="container-stepper">
        <button v-for="(step, index) in steps" @click="changeStep(index + 1)" :key="index" :disabled="currentStep < (index + 1)">
            <span>{{ index + 1 }}</span>
        </button>
    </div>
</template>

<script setup>
import { onUpdated } from 'vue'
import useFormData from '@composables/useStepperData'

const { steps, currentStep, changeStep } = useFormData()
</script>

<style scoped lang="scss">
    div.container-stepper {
        display: flex;
        justify-content: center;

        & > button {
            width: 30px;
            height: 30px;
            border-radius: 30px;
            background: var(--primary-color);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            cursor: pointer;
            font-weight: bold;

            & > span {
                margin-top: -2px;
            }

            &:disabled {
                background: rgba(83, 83, 83, 0.5);
                cursor: default;
            }

            &:not(:last-of-type) {
                margin-right: 5px;
            }
        }
    }
</style>