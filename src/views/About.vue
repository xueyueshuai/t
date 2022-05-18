<template>
  <div>
    <fieldset>
      <legend>About us</legend>
      This is an about page : {{ $route.path }}
    </fieldset>
  </div>
</template>


<script>
export default {
  mounted() {
  },
};
</script>

<style lang="less" scoped>
fieldset {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.6);
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;

  line-height: 30px;
  list-style: none;
  padding: 5px 10px;
  margin-bottom: 2px;
}
legend {
  color: #302a2a;
  font: bold 16px/2 Verdana, Geneva, sans-serif;
  font-weight: bold;
  text-align: left;
  text-shadow: 2px 2px 2px rgb(88, 126, 156);
}
</style>