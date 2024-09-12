<template>
  <div>
    <div class="general-container-header">
      <div>
        <h1>SimpleStepper</h1>
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .general-container-header {
    background-color: #5bc292;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 20px;

    & > div {
      & > h1 {
        color: white;
        font-size: 22px;
      }
    }
  }
</style>