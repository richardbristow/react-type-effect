import React, { useState, useEffect, useCallback, useRef } from 'react';

const ArrayTyper = ({
  children,
  characterDelay,
  startTypingDelay,
  handleNextBlock,
  nextBlockDelay,
  lastChild,
}) => {
  const [text, setText] = useState([]);
  const [childrenIndex, setChildrenIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const {
    props: { children: arrayToType },
  } = children;
  const startTypingDelayTimerRef = useRef(null);
  const charDelayTimerRef = useRef(null);
  const nextBlockDelayTimerRef = useRef(null);

  const isTyping =
    childrenIndex < arrayToType.length &&
    (currentCharIndex !== 0 || childrenIndex !== 0);

  const indexedCharTyper = useCallback(
    (stringToType) => {
      if (childrenIndex < arrayToType.length) {
        if (typeof stringToType === 'string') {
          if (currentCharIndex < stringToType.length) {
            charDelayTimerRef.current = setTimeout(() => {
              setText((prevText) => [
                ...prevText,
                stringToType[currentCharIndex],
              ]);
              setCurrentCharIndex(currentCharIndex + 1);
            }, characterDelay);
          } else {
            setCurrentCharIndex(0);
            setChildrenIndex((prevIndex) => prevIndex + 1);
          }
        } else if (React.isValidElement(stringToType)) {
          setText((prevText) => [...prevText, stringToType]);
          setChildrenIndex((prevIndex) => prevIndex + 1);
        } else {
          setChildrenIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        nextBlockDelayTimerRef.current = setTimeout(() => {
          handleNextBlock();
          if (!lastChild) {
            setShowCursor(false);
          }
        }, nextBlockDelay);
      }
    },
    [
      arrayToType.length,
      characterDelay,
      childrenIndex,
      currentCharIndex,
      handleNextBlock,
      lastChild,
      nextBlockDelay,
    ],
  );

  useEffect(() => {
    startTypingDelayTimerRef.current = setTimeout(
      () => {
        indexedCharTyper(arrayToType[childrenIndex]);
      },
      currentCharIndex === 0 && childrenIndex === 0 ? startTypingDelay : 0,
    );

    return () => {
      clearTimeout(charDelayTimerRef.current);
      clearTimeout(startTypingDelayTimerRef.current);
      clearTimeout(nextBlockDelayTimerRef.current);
    };
  }, [
    arrayToType,
    childrenIndex,
    currentCharIndex,
    indexedCharTyper,
    startTypingDelay,
  ]);

  return React.cloneElement(children, {
    children: text,
    withCursor: showCursor,
    cursorBlink: !isTyping,
  });
};

export default ArrayTyper;
