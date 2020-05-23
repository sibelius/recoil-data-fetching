import { Flex, Text } from 'rebass';
import React from 'react';
import { githubUser } from './Atoms';
import { useRecoilValue } from 'recoil';

const GithubUser = () => {
  const user = useRecoilValue(githubUser);

  if (!user) {
    return (
      <Flex alignItems='center' flexDirection='column' mt='10px'>
        <Text>Type the username to fetch his/her information</Text>
      </Flex>
    )
  }

  if (user.message === 'Not Found') {
    return (
      <Flex alignItems='center' flexDirection='column' mt='10px'>
        <Text>User not found</Text>
      </Flex>
    );
  }


  return (
    <Flex alignItems='center' flexDirection='column' mt='10px'>
      <img src={user.avatar_url} width={100} height={100} />
      <Text>{user.login}</Text>
      <Text>{user.bio}</Text>
    </Flex>
  )
};

export default GithubUser;