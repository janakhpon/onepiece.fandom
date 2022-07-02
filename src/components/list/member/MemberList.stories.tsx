import { ComponentMeta, ComponentStory } from "@storybook/react";
import MemberList, { IMemberList } from "./MemberList";
import { mockMemberListProps } from "./MemberList.mocks";

export default {
  title: "cards/MemberList",
  component: MemberList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MemberList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MemberList> = (args) => (
  <MemberList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMemberListProps.base,
} as IMemberList;
