<template>
  <div class="error">
    <p>Page non trouvée</p>
    <img src="@/assets/img/Error404.svg" alt="erreur404" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 120px;
  height: 400px;
  p {
    margin: auto;
    font-size: 32px;
    font-weight: bold;
  }
  img {
    width: 100px;
    height: auto;
  }
}
</style>
