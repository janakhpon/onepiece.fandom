import { ComponentMeta, ComponentStory } from "@storybook/react";
import GroupCard from "./GroupCard";
import { IPirates } from "../../list/group/PiratesList";
import { mockGroupCardProps } from "./GroupCard.mocks";

export default {
  title: "cards/GroupCard",
  component: GroupCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof GroupCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GroupCard> = (args) => (
  <GroupCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockGroupCardProps.base,
} as IPirates;
