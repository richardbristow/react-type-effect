import styled, { css, keyframes } from 'styled-components/macro';
import PropTypes from 'prop-types';

const cursorBlinkKf = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }

`;

const StyledCursor = styled.span`
  display: inline-block;
  width: 0.9em;
  height: 1em;
  vertical-align: text-top;
  background-color: #fff;

  ${({ terminalText, cursorBlink }) =>
    (terminalText || cursorBlink) &&
    css`
      animation: ${terminalText && 'boxShadow 2s infinite'}
        ${terminalText && cursorBlink && ','}
        ${cursorBlink &&
        css`
          ${cursorBlinkKf} 1.4s infinite step-end
        `};
      transform: translate3d(0, 0, 0);
    `}
`;

const Cursor = ({ terminalText, cursorBlink }) => (
  <StyledCursor terminalText={terminalText} cursorBlink={cursorBlink} />
);

Cursor.defaultProps = {
  terminalText: false,
  cursorBlink: false,
};

Cursor.propTypes = {
  terminalText: PropTypes.bool,
  cursorBlink: PropTypes.bool,
};

export default Cursor;
