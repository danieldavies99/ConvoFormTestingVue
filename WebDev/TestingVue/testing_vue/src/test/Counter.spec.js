import { mount } from "vue-test-utils";
import Counter from "../components/Counter.vue";
import expect from "expect";
import { before } from "mocha";

describe("Counter", () => {
  let wrapper;
  beforeEach(() => {
    /*
    wrapper = mount(Counter);
    */
    wrapper = mount(Counter, {
      propsData: {
        propProductName: "a product",
      },
      data: {
        count: 0,
      },
    });
  });

  it("defaults to a count of 0", () => {
    expect(wrapper.vm.count).toBe(0);
  });

  it("increments the count when the increment button is clicked", () => {
    expect(wrapper.find(".count").html()).toContain(0);

    wrapper.find(".incrementButton").trigger("click");

    expect(wrapper.find(".count").html()).toContain(1);
  });

  it("decrements the count when the decrement button is clicked", () => {
    expect(wrapper.find(".count").html()).toContain(0);

    wrapper.find(".incrementButton").trigger("click");
    wrapper.find(".incrementButton").trigger("click");
    wrapper.find(".incrementButton").trigger("click");

    expect(wrapper.find(".count").html()).toContain(3);

    wrapper.find(".decrementButton").trigger("click");

    expect(wrapper.find(".count").html()).toContain(2);
  });

  it("presents the current count", () => {
    expect(wrapper.find(".count").html()).toContain(0);
  });

  it("does not allow the count to fall below 0", () => {
    expect(wrapper.find(".count").html()).toContain(0);
    wrapper.find(".decrementButton").trigger("click");

    expect(wrapper.find(".count").html()).toContain(0);
  });

  it("presents the product name", () => {
    expect(wrapper.find(".productName").html()).toContain("a product");
  });

  it("shortens the product name if it is longer than 19 characters", () => {
    wrapper = mount(Counter, {
      propsData: {
        propProductName: "This Product Has A Long Name",
      },
    });
    expect(wrapper.find(".productName").html()).toContain(
      "This Product Has..."
    );
  });
});
