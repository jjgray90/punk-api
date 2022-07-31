import { render } from "@testing-library/react";
import CardModal from "./CardModal";

describe("CardModal tests", () => {
  it("should render", () => {
    const { container } = render(<CardModal />);
    expect(container).toMatchSnapshot();
  });
});
