import TyperBlock from '../src/components/TyperBlock';

export default {
  title: 'TyperBlock',
  component: TyperBlock,
  argTypes: {
    children: {
      control: false,
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <TyperBlock {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </TyperBlock>
);

export const WithCursorAndBlink = Template.bind({});
WithCursorAndBlink.args = {
  marker: '>',
  textElementTag: 'p',
  withCursor: true,
  cursorBlink: true,
};

export const WithCursor = Template.bind({});
WithCursor.args = {
  marker: '>',
  textElementTag: 'p',
  withCursor: true,
  cursorBlink: false,
};

export const NoCursor = Template.bind({});
NoCursor.args = {
  marker: '~$',
  textElementTag: 'p',
  withCursor: false,
  cursorBlink: false,
};
