<template>
  <div class="painel">
    <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>
    <transition name="painel-fade">
      <div class="painel-conteudo" v-show="visivel">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["titulo"],

  data() {
    return {
      visivel: true
    };
  }
};
</script>

<style lang="scss" scoped>
.painel {
  padding: 0 auto;
  border: solid 2px #f4f4f4;
  border-radius: 20px 20px 20px 20px;
  display: inline-block;
  margin: 5px;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px #f4f4f4;
  border-radius: 20px 20px 0 0;
  background: #f4f4f4;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

.painel-fade-enter,
.painel-fade-leave-active {
  opacity: 0;
}

.painel-fade-enter-active,
.painel-fade-leave-active {
  transition: opacity 0.4s;
}
</style>
