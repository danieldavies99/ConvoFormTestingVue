<template>
  <div style="width: 20rem;" class="p-2 bg-gray-100 mx-auto">
    <div style="height: 25rem;" class="overflow-y-scroll">
      <p
        class="time text-gray-600 text-center my-3 font-thin"
        v-text="time"
      ></p>
      <div
        v-for="(message, index) in sentMessages"
        :class="`message${index} mb-4 mx-2`"
        :key="index"
      >
        <!-- current question -->
        <p
          v-if="index == sentMessages.length - 1"
          class="currQuestion w-4/5 p-3 bg-gradient-to-l from-teal-500 to-blue-500 text-white rounded-t-lg rounded-br-lg"
          v-text="currentQuestionMessage"
        >
          ...
        </p>

        <!-- past questions -->
        <p
          v-else-if="index % 2 == 0"
          class="w-4/5 p-3 bg-gradient-to-l from-teal-500 to-blue-500 text-white rounded-t-lg rounded-br-lg"
          :message="message"
        >
          {{ message }}
        </p>

        <!-- responses -->
        <p
          v-else
          :message="message"
          class="w-4/5 text-right ml-auto mr-0 p-3 bg-gray-300 rounded-t-lg rounded-bl-lg"
        >
          {{ message }}
        </p>
      </div>
    </div>

    <div>
      <div
        v-for="(response, index) in responses[currentQuestion]"
        :key="index"
        :class="`response${index} bg-gray-200 p-2 rounded m-2 cursor-pointer`"
        @click="answerQuestion(index)"
      >
        {{ response }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "",
      currentQuestion: 0,
      currentQuestionMessage: "...",
      typingDelay: "250",
      sentMessages: [],
    };
  },
  props: ["questions", "responses"],
  created: function() {
    this.sentMessages.push(this.questions[0]);

    let d = new Date();
    this.time += d.getHours();
    this.time += ":";
    if (d.getMinutes() < 10) {
      this.time += "0";
      this.time += d.getMinutes();
    } else this.time += d.getMinutes();
    this.typeNewQuestion();
  },
  methods: {
    answerQuestion(responseIndex) {
      this.sentMessages.push(
        this.responses[this.currentQuestion][responseIndex]
      );
      this.currentQuestion++;
      this.sentMessages.push(this.questions[this.currentQuestion]);
      this.typeNewQuestion();
    },
    typeNewQuestion() {
      this.currentQuestionMessage = "...";
      window.setTimeout(() => {
        this.currentQuestionMessage = this.questions[this.currentQuestion];
      }, this.typingDelay);
    },
  },
};
</script>
