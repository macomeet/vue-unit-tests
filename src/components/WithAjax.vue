<template>
  <div>
    <h1>My todo</h1>
    {{ todo }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      todo: null,
    }
  },
  async beforeMount() {
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => (this.todo = json))
  },
}
</script>
