<template>
  <div class="ce-text" :class="`ce-text--${appearance.layout}`">
    <h1 v-if="header" class="ce-text__header">
      {{ header }}
    </h1>
    <h2 v-if="subheader" class="ce-text__subheader">
      {{ subheader }}
    </h2>
    <p class="ce-text__paragraph">{{ bodytext }}</p>
  </div>
</template>
<script>

export default {
  name: 'ContentElement',
  funcional: false,
  props: {
    header: {
      type: String,
      required: false,
      default: '',
    },
    subheader: {
      type: String,
      required: false,
      default: '',
    },
    bodytext: {
      type: String,
      required: true,
      default: '',
    },
    appearance: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style lang="scss">
.ce-text {
  a {
    text-decoration: underline;
  }
  &__header {
    font-size: 21px;
    line-height: 24px;
    padding-bottom: 20px;
  }

  &__subheader {
    font-size: 18px;
    line-height: 22px;
    padding-bottom: 20px;
  }

  &__paragraph {
    font-size: 14px;
    line-height: 18px;
  }
}
</style>