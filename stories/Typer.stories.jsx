import React from 'react';

import Typer from '../src/components/Typer';
import TyperBlock from '../src/components/TyperBlock';

export default {
  title: 'Typer',
  component: Typer,
};

const Template = (args) => (
  <Typer {...args}>
    <TyperBlock marker=">" withCursor={true} cursorBlink={false}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </TyperBlock>
    <TyperBlock marker=">" withCursor={true} cursorBlink={false}>
      Vitae congue mauris rhoncus aenean vel elit scelerisque mauris.
    </TyperBlock>
    <TyperBlock marker=">" withCursor={true} cursorBlink={false} />
  </Typer>
);

export const Default = Template.bind({});
Default.args = {
  characterDelay: 18,
  nextBlockDelay: 150,
  startTypingDelay: 500,
};

export const NoNextBlockDelay = Template.bind({});
NoNextBlockDelay.args = {
  characterDelay: 18,
  nextBlockDelay: 0,
  startTypingDelay: 500,
};

export const NoStartTypingDelay = Template.bind({});
NoStartTypingDelay.args = {
  characterDelay: 18,
  nextBlockDelay: 150,
  startTypingDelay: 0,
};
