import { ComponentMeta, ComponentStory } from "@storybook/react";
import PiratesList, { IPiratesList } from "./PiratesList";
import { mockPiratesListProps } from "./PiratesList.mocks";

export default {
  title: "cards/PiratesList",
  component: PiratesList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PiratesList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PiratesList> = (args) => (
  <PiratesList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPiratesListProps.base,
} as IPiratesList;
