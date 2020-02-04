<template>
  <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>
export default {
  props: {
    tipo: {
      required: true,
      type: String
    },
    rotulo: {
      required: true,
      type: String
    },
    confirmacao: Boolean,
    estilo: String
  },

  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma operação?")) {
          this.$emit("botaoAtivado", new Date());
        }
        return;
      }
      this.$emit("botaoAtivado");
    }
  },

  computed: {
    estiloDoBotao() {
      if (this.estilo == "padrao" || !this.estilo) return "botao-padrao";
      if (this.estilo == "perigo") return "botao-perigo";
    }
  }
};
</script>

<style lang="scss" scoped>
.botao {
  display: inline-block;
  height: 35px;
  width: 140px;
  padding: 0 25px;
  border: 0 solid white;
  border-radius: 20px;
  box-shadow: 0 0 0 0 white;
  background-color: white;
  font-size: 1.2em;
  color: white;
  text-transform: uppercase;
  margin: 10px 15px;
}

.botao-perigo {
  background: #c72c41;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>
