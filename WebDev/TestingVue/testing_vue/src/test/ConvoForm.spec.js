import { mount } from "vue-test-utils";
import ConvoForm from "../components/ConvoForm.vue";
import expect from "expect";
import { before } from "mocha";

describe("ConvoForm", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(ConvoForm, {
      propsData: {
        questions: [
          "Hi How Can I help you today?",
          "Are you an existing customer?",
          "Is there anything else I can help you with?",
        ],
        responses: [
          ["General Enquiries", "Technical Support", "Something Else"],
          ["Yes", "No"],
          ["Yes", "No"],
        ],
      },
      /*data: {
        count: 0,
      },*/
    });
  });

  it("displays typing symbol by default", () => {
    expect(wrapper.find(".currQuestion").html()).toContain("...");
  });

  it("displays the first question by default after typing delay", () => {
    expect(wrapper.find(".currQuestion").html()).toContain(
      "Hi How Can I help you today?"
    );
  });

  it("displays responses to first question by default", () => {
    expect(wrapper.find(".response0").html()).toContain("General Enquiries");
    expect(wrapper.find(".response1").html()).toContain("Technical Support");
    expect(wrapper.find(".response2").html()).toContain("Something Else");
  });

  it("displays chosen answer once an answer is clicked", () => {
    wrapper.find(".response0").trigger("click");
    expect(wrapper.find(".message1").html()).toContain("General Enquiries");
  });

  it("displays the next question once an answer is clicked", () => {
    wrapper.find(".response0").trigger("click");
    expect(wrapper.find(".message2").html()).toContain(
      "Are you an existing customer?"
    );
  });

  it("displays the current time", () => {
    let time = "";
    let d = new Date();
    time += d.getHours();
    time += ":";
    if (d.getMinutes() < 10) {
      time += "0";
      time += d.getMinutes();
    } else time += d.getMinutes();

    expect(wrapper.find(".time").html()).toContain("time");
  });
});
