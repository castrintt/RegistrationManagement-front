import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Buttons, { Props } from "../App/Components/Buttons/Buttons";

export default {
  title: "Components/Buttons",
  component: Buttons,
  argTypes: {
    onClickMethod: { control: "function" },
    buttonText: { control: "text" },
    variant: {
      control: {
        type: "select",
        options: ["edit", "delete", "create", "createFull"],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["submit", "button"],
      },
    },
    width: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<Props> = (args) => <Buttons {...args} />;

export const DefaultEdit = Template.bind({});
DefaultEdit.args = {
  onClickMethod: () => {
    console.log("Button clicked");
  },
  buttonText: "Text Here",
  variant: "edit",
  width: "10rem",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...DefaultEdit.args,
  disabled: true,
};
