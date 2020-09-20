<template>
  <div class="font-mono my-2 bg-blue-400 inline-block p-2 rounded">
    <span class="text-white ml-2 mr-8 productName" v-text="productName"></span>
    <span class="text-white ml-2 mr-2 count" v-text="count"></span>
    <button
      class="transition duration-300 text-white hover:text-gray-400 focus:outline-none mx-2 incrementButton button"
      @click="count++"
    >
      +
    </button>
    <button
      class="transition duration-300 text-white hover:text-gray-400 focus:outline-none mx-2 decrementButton button"
      @click="decrement()"
    >
      -
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      productName: this.propProductName,
    };
  },
  props: ["propProductName"],
  created: function() {
    if (this.productName.length > 19) {
      this.productName = this.productName.slice(0, 16);
      this.productName += "...";
    }
  },
  methods: {
    decrement: function() {
      if (this.count > 0) this.count--;
    },
  },
};
</script>
