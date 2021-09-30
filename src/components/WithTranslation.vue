<template>
  <div>
    <p>
      This component use $i18n global function to translate, translated text
      should be here:
    </p>
    <p class="message">
      {{ $i18n(message) }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      default: 'zajebista wtyczka do translacji',
    },
  },
}
</script>
