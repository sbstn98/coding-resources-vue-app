import { render } from "@testing-library/vue";
import BaseParagraph from "./BaseParagraph.vue";

test("it should work", () => {
  const { getByText } = render(BaseParagraph, {
    props: {
      text: "This is a String",
    },
  });
  // assert output
  getByText("This is a String");
});
