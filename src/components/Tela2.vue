<template>
  <div class="hello">
    TELA 2
    {{ user }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  created() {
    this.$store.dispatch("fetchusers");
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
