import { Flex } from 'rebass';
import React, { useState } from 'react';
import { username } from './Atoms';
import { useSetRecoilState } from 'recoil';

const UsernameInput = () => {
  const [inputValue, setInputValue] = useState('');
  const setUsername = useSetRecoilState(username);

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };

  const clear = () => {
    setUsername(null);
  }

  const search = () => {
    setUsername(inputValue);
  }

  return (
    <Flex>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={search}>Search</button>
      <button onClick={clear}>Clear</button>
    </Flex>
  )
};

export default UsernameInput;