<template>
  <div>
    <notifications></notifications>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Login from "@/pages/Login.vue"; 
import globalFunctions from './globalFunctions';

export default {
  setup() {
    provide('globalFunctions', globalFunctions);
  },
  computed: {
    errorMessage() {
      return globalFunctions.errorMessage;
    },
  },
  methods: {
    disableRTL() {
      if (!this.$rtl.isRTL) {
        this.$rtl.disableRTL();
      }
    },
    toggleNavOpen() {
      let root = document.getElementsByTagName("html")[0];
      root.classList.toggle("nav-open");
    },
  },
  mounted() {
    this.$watch("$route", this.disableRTL, { immediate: true });
    this.$watch("$sidebar.showSidebar", this.toggleNavOpen);
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (!vm.$auth.isAuthenticated()) {
        next({ name: 'Login' });
      }
    });
  },
};
</script>

<style lang="scss"></style>
