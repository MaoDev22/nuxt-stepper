import { reactive, ref, shallowRef, computed, onMounted, watch } from 'vue'
import { register } from '@services/userService'

const defaultFormData = {
  name: '',
  email: '',
  password: '',
  phone: '',
  address: '',
  terms: false
}

const formData = reactive(defaultFormData)
const steps = shallowRef([])
const currentStep = ref(1)
const currentStepComponent = computed(() => steps.value[currentStep.value - 1])
const readyToSend = computed(() => currentStep.value >= steps.value.length)
const synchronized = ref(false)
const loading = ref(false)
const success = ref(false)
const error = ref(false)

const nextStep = () => {
  if (!readyToSend.value) {
    currentStep.value++
  } else {
    (async () => {
      loading.value = true;
      success.value = false
      error.value = false

      try {
        await register(formData)
        success.value = true
        formData = defaultFormData
      } catch(e) {
        error.value = true
      } finally {
        loading.value = false
      }
    })()
  }
}

const previousStep = () => {
  if (currentStep.value > 1) currentStep.value--
}

const changeStep = (value) => {
  currentStep.value = value
}

const loadFromLocalStorage = (key, defaultValue) => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : defaultValue
  }

  return defaultValue
}

const saveToLocalStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

const synchronize = () => {
  const formDataGeted = loadFromLocalStorage('formData', defaultFormData)
  const currentStepGeted = loadFromLocalStorage('currentStep', 1)

  Object.assign(formData, formDataGeted)
  currentStep.value = currentStepGeted

  synchronized.value = true
}

watch(
  [
    () => formData,
    () => steps.value,
    () => currentStep.value
  ],
  (newValues) => {
    if(!synchronized.value) return
    saveToLocalStorage('formData', formData)
    saveToLocalStorage('currentStep', currentStep.value)
  },
  { deep: true }
)

export default () => {
  onMounted(() => {
    if(synchronized.value) return
    synchronize()
  })

  return {
    formData,
    steps,
    currentStep,
    currentStepComponent,
    readyToSend,
    loading,
    success,
    error,
    changeStep,
    nextStep,
    previousStep
  }
}
