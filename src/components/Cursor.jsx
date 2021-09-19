import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';

import '../style/keyframes.css';

const StyledCursor = styled.span`
  display: inline-block;
  width: 14px;
  height: 20px;
  background-color: #fff;

  ${({ terminalText, cursorBlink }) =>
    (terminalText || cursorBlink) &&
    css`
      animation: ${terminalText && 'boxShadow 2s infinite'}
        ${terminalText && cursorBlink && ','}
        ${cursorBlink && 'cursorBlink 1.4s infinite step-end'};
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
