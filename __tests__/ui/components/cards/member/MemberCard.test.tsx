import { render, screen } from "@testing-library/react";
import MemberCard from "@/components/cards/member/MemberCard";
import { readFakePirateDetail } from "../../../../__mocks__/fakeData";

describe("Pirate Detail Profile/Member Card Component", () => {
  it("should render the component properly", async () => {
    const { feed } = await readFakePirateDetail();
    render(<MemberCard {...feed} />);
    const pirateName_jp = screen.getByText(/モンキー・Dディー・ルフィ/i);
    expect(pirateName_jp).toBeInTheDocument();
  });
});
