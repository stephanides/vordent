import React from 'react';
import { useQuery } from '@apollo/client';

import { USERS_QUERY } from '../../../graphql/query';
import { User } from '../../../shared/types';
import { UserCell } from './UserCell';
import cookie from 'js-cookie';
import { Row } from 'reactstrap';
import styled from 'styled-components';

export const UsersPage = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) {
    return <>loading</>;
  }

  if (error) {
    return <>{error.message}</>;
  }

  const { users } = data;
  const actualUser = cookie.get('userId');

  return (
    <Wrapper>
      <Row>
        {users.map((user: User) => (
          <UserCell user={user} actualUser={actualUser} key={user._id} />
        ))}
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 16px 32px;
`;
