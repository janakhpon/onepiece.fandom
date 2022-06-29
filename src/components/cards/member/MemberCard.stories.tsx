import { ComponentMeta, ComponentStory } from "@storybook/react";
import MemberCard, { IMemberCard } from "./MemberCard";
import { mockMemberCardProps } from "./MemberCard.mocks";

export default {
  title: "cards/MemberCard",
  component: MemberCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MemberCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MemberCard> = (args) => (
  <MemberCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMemberCardProps.base,
} as IMemberCard;
