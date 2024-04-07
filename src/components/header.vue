<script setup lang="ts">
const routes = [{ name: 'Gararge', path: '/garage' }]
</script>

<template>
  <header>
    <nav>
      <li v-for="route in routes" :key="route.path">
        <RouterLink :to="route.path">{{
          route.name
        }}</RouterLink>
      </li>
    </nav>
  </header>
</template>

<style scoped>
header {
  margin-bottom: 1rem;
}

li {
  list-style: none;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}
</style>
