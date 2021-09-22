import Typer from '../src/components/Typer';
import TyperBlock from '../src/components/TyperBlock';

export default {
  title: 'Typer',
  component: Typer,
};

const Template = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Typer {...args}>
    <TyperBlock marker=">" withCursor cursorBlink={false}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </TyperBlock>
    <TyperBlock marker=">" withCursor cursorBlink={false}>
      Vitae congue mauris rhoncus aenean vel elit scelerisque mauris.
    </TyperBlock>
    <TyperBlock marker=">" withCursor cursorBlink={false} />
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
