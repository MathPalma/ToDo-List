<template>

  <router-view />
  
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Do homework"
        }
      ],
      bg: '#371B58'
    }
  },
  mounted() {
    document.body.style.backgroundColor = this.bg;
  }
};
</script>

<style>
label {
  color: white;
}

.labelNav {
  cursor: pointer;
}

.labelNav:hover {
  border: 1px solid #5B4B8A;
  border-radius: 10%;
  margin: -1px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
