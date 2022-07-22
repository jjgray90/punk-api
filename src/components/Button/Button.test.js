import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button tests", () => {
  it("should render", () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
