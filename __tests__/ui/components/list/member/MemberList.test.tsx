import { render, screen, within, waitFor } from "@testing-library/react";
import MemberList from "@/components/list/member/MemberList";
import { readFakePirateCrew } from "../../../../__mocks__/fakeData";

describe("Pirate Crew/Member List Component", () => {
  it("should render the component properly", async () => {
    const { feed } = await readFakePirateCrew();
    render(<MemberList feed={feed} />);
    const pirateGroup = screen.getByRole("heading", {
      name: /heart pirates/i,
    });
    const pirateCrew = screen.getByRole("link", {
      name: /trafalgar d\. water law/i,
    });
    const piratePosition = screen.getByText(/captain/i);
    const pirateOrigin = screen.getByText(/north blue/i);
    const pirateImage = screen.getByRole("img", {
      name: /trafalgar d\. water law/i,
    });
    expect(pirateGroup).toBeInTheDocument();
    expect(pirateCrew).toBeInTheDocument()
    expect(piratePosition).toBeInTheDocument()
    expect(pirateOrigin).toBeInTheDocument()
    expect(pirateImage).toBeInTheDocument()
    expect(pirateCrew.getAttribute('href')).toBe("/Heart/Trafalgar_D._Water_Law")
    expect(pirateImage).toHaveAttribute("src", "images/law.jpg")
  });
});
