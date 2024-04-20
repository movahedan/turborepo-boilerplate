import { render, screen } from "@testing-library/react";

import { Code } from "./code";

import type { CodeProps } from "./code";

const defaultProps: CodeProps = {
  dataTestId: "code",
  className: "flex",
  children: "text",
};

describe("<Code />", () => {
  let props: CodeProps = defaultProps;

  beforeEach(() => {
    props = defaultProps;
  });

  test("should render successfully", () => {
    render(<Code {...props} />);

    const code = screen.getByTestId("code");
    expect(code).toBeInTheDocument();
    expect(code).toHaveClass("flex");
  });
});
