<template>
  <div class="ce-text">
    <h1 v-if="header" class="ce-text__header">Life Cycle testing</h1>
    <span></span>
  </div>
</template>
<script>
export default {
  name: 'Life Cycle',
  props: {
    header: {
      type: String,
      required: false,
      default: '',
    }
  },
  beforeMount() {
    return 'Before mount'
  },
  created() {
    return 'created'
  }
}
</script>