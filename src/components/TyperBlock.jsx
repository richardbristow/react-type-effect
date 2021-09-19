import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';

import Cursor from './Cursor';
import '../style/keyframes.css';

const StyledTyperBlock = styled.div`
  display: flex;
  margin-bottom: 16px;

  p {
    margin: 0px;
  }

  &.passed-elements {
    align-items: center;
  }

  .marker {
    padding-right: 16px;
  }

  ${({ terminalText }) =>
    terminalText &&
    css`
      animation: textShadow 2s infinite;
      transform: translate3d(0, 0, 0);
    `}
`;

const TyperBlock = ({
  className,
  marker,
  children,
  textElementTag,
  terminalText,
  withCursor,
  cursorBlink,
}) => {
  const CustomElement = textElementTag;
  const isObject =
    children && typeof children[children.length - 1] !== 'string';

  return (
    <StyledTyperBlock
      className={isObject ? `${className} passed-elements` : className}
      terminalText={terminalText}
    >
      {marker && <span className="marker">{marker}</span>}
      {isObject ? (
        <div>
          {children}
          {withCursor && (
            <Cursor cursorBlink={cursorBlink} terminalText={terminalText} />
          )}
        </div>
      ) : (
        <CustomElement>
          {children}
          {withCursor && (
            <Cursor cursorBlink={cursorBlink} terminalText={terminalText} />
          )}
        </CustomElement>
      )}
    </StyledTyperBlock>
  );
};

TyperBlock.defaultProps = {
  marker: null,
  children: null,
  textElementTag: 'p',
  terminalText: false,
  className: null,
  withCursor: false,
  cursorBlink: false,
};

TyperBlock.propTypes = {
  marker: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  textElementTag: PropTypes.string,
  terminalText: PropTypes.bool,
  className: PropTypes.string,
  withCursor: PropTypes.bool,
  cursorBlink: PropTypes.bool,
};

export default TyperBlock;
