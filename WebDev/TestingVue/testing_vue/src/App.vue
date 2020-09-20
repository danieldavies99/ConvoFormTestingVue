<template>
  <div id="app" class="w-full">
    <ConvoForm :questions="questions" :responses="responses" />
    <!-- <Counter propProductName="Xbox One Controller" /><br /> -->
  </div>
</template>

<script>
//import Counter from "./components/Counter.vue";
import ConvoForm from "./components/ConvoForm.vue";

export default {
  data() {
    return {
      questions: [
        "Hi there! how can I help you today?",
        "Are you a new or returning customer with us?",
        "Is there anything else I can help you with?",
        "Thank you for getting in touch, Have a nice day!",
      ],
      responses: [
        ["General Enquiries", "Technical Support", "Something Else"],
        ["New Customer", "Returning Customer"],
        ["Yes", "No"],
      ],
    };
  },
  name: "App",
  components: {
    ConvoForm,
    //Counter,
  },
};
</script>
