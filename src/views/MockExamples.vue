<template>
  <div>
    <WithIcon />
    <WithTranslation />
    <WithAjax />
  </div>
</template>
<script>
import WithIcon from '../components/WithIcon.vue'
import WithTranslation from '../components/WithTranslation.vue'
import WithAjax from '../components/WithAjax.vue'
export default {
  components: {
    WithIcon,
    WithTranslation,
    WithAjax,
  },
}
</script>
