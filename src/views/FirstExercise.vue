<template>
  <div class="contanier">
    <ContentElement
      :header="contentElement.header"
      :subheader="contentElement.subheader"
      :bodytext="contentElement.bodytext"
      :appearance="contentElement.appearance"
    />
  </div>
</template>

<script>
import ContentElement from '@/components/ContentElement.vue'
export default {
  name: 'FirstExercise',
  components: {
    ContentElement,
  },
  data() {
    return {
      contentElement: {
        header: "I'm example of CE",
        subheader: 'Lorem ipsum',
        bodytext:
          'Vestibulum placerat ultrices lacus, a scelerisque lacus finibus quis. Nam ac finibus mauris. Sed quis placerat nisi. Donec commodo vulputate gravida.',
        appearance: {
          layout: 'full-width',
        },
      },
    }
  },
}
</script>
