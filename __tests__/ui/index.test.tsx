import { render, screen, within, waitFor } from "@testing-library/react";
import Home from "@/pages/index";
import { readFakePiratesList } from "../__mocks__/fakeData";

describe("pages/index - Home", () => {
  it("renders heading and subheading", async () => {
    const data = await readFakePiratesList();
    const { feed, count } = data;
    render(<Home feed={feed} count={count} />);

    const heading = screen.getByRole("heading", {
      name: /one piece/i,
    });

    const subheading = screen.getByRole("heading", {
      name: /notorious pirate groups/i,
    });

    expect(heading).toBeInTheDocument();
    expect(subheading).toBeInTheDocument();
  });

  it("Pirate Groups' CardList should exist", async () => {
    const data = await readFakePiratesList();
    const { feed, count } = data;
    render(<Home feed={feed} count={count} />);

    const cardList = screen.getByTestId("cardList");
    const { getAllByRole } = within(cardList);
    await waitFor(() => expect(getAllByRole("cardListItem").length).toBe(3));
    await waitFor(() => expect(getAllByRole("cardListItem")[0]).toHaveTextContent("Heart"));
    expect(cardList).toBeInTheDocument();
  });
});
