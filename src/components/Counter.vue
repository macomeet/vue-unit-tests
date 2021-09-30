<template>
  <div class="counter">
    <p class="counter__text">
      Please note that this will not cross the limit, currently set at
      <strong>0</strong> to <strong>40</strong>!
    </p>
    <div class="counter__container">
      <div class="counter__buttons">
        <button
          @click="increaseCounter(20)"
          id="add-btn"
          class="button rounded shadow success"
        >
          Increase
        </button>
        <button
          @click="decreaseCounter(0)"
          id="decrease-btn"
          class="button rounded shadow warning"
        >
          Decrease
        </button>
        <button
          @click="resetCounter"
          id="reset-btn"
          class="button rounded shadow alert"
        >
          Reset
        </button>
      </div>
      <p>
        Counter: <span class="conuter">{{ counter }}</span>
      </p>
      <p>
        Result: <span class="result">{{ output }} </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'couter',
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increaseCounter(increaseLimit) {
      if (this.counter < increaseLimit) this.counter++
    },
    decreaseCounter(decreaseLimit) {
      if (this.counter > decreaseLimit) this.counter--
    },
    resetCounter() {
      this.counter = 0
    },
  },
  computed: {
    output() {
      return this.counter >= 10 ? '10 or more' : 'Less than 10'
    },
  },
}
</script>

<style lang="scss">
.counter {
  display: flex;
  flex-direction: column;

  &__text {
    margin-bottom: 30px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__buttons {
    button {
      border: none;
      color: #ffffff;
      padding: 10px;
      border-radius: 2px;
      cursor: pointer;
      margin: 2px;
    }
    #add-btn {
      background-color: #00b200;
    }
    #decrease-btn {
      background-color: #ffa500;
    }
    #reset-btn {
      background-color: #ff0000;
    }
  }
}
</style>
