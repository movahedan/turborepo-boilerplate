import { render, screen } from "@testing-library/react";

import { Card } from "./card";

import type { CardProps } from "./card";

const defaultProps: CardProps = {
  dataTestId: "card",
  title: "title",
  href: "https://domain.com",
  children: "text",
};

describe("<Card />", () => {
  let props: CardProps = defaultProps;

  beforeEach(() => {
    props = defaultProps;
  });

  test("should render successfully", () => {
    render(<Card {...props} />);

    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("text")).toBeInTheDocument();
  });
});
