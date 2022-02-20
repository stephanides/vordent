import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import { Col } from 'reactstrap';
import { User } from '../../../shared/types';
import { Switch } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { UPDATE_USER_MUTATION } from '../../../graphql/mutation';
import { useSnackbar } from 'notistack';
import { USERS_QUERY } from '../../../graphql/query';
import styled from 'styled-components';
import {
  borderBoxShadow,
  borderRadius,
  colors,
  Paragraph,
} from '../../../shared/design';

type UserCellType = {
  user: User;
  actualUser: string;
};

export const UserCell = (props: UserCellType) => {
  const { user, actualUser } = props;
  const [updateUserMutate] = useMutation(UPDATE_USER_MUTATION, {
    refetchQueries: [{ query: USERS_QUERY }],
  });
  const { enqueueSnackbar } = useSnackbar();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleUpdateUser(event.target.checked);
  };

  const handleUpdateUser: (confirmed: boolean) => Promise<void> = async (
    confirmed
  ) => {
    try {
      await updateUserMutate({
        variables: {
          id: user._id,
          confirmed: confirmed,
        },
      });
      enqueueSnackbar('Zmena bola úspešne vykonaná', {
        variant: 'success',
      });
    } catch (err) {
      enqueueSnackbar('Nastala chyba', {
        variant: 'error',
      });
    }
  };

  return (
    <StyledCol key={user._id} xl={4} md={6} sm={12}>
      <UserIcon />
      <Info>
        <Paragraph>
          {user.firstName} {user.lastName}
        </Paragraph>
        <Paragraph>{user.email}</Paragraph>
      </Info>
      <SwitchWrapper>
        <Paragraph>Prístup do administrácie: </Paragraph>
        <Switch
          disabled={user._id === actualUser}
          checked={user.confirmed}
          onChange={handleChange}
          name="confirmed"
          inputProps={{ 'aria-label': 'confirmed checkbox' }}
        />
      </SwitchWrapper>
    </StyledCol>
  );
};

const StyledCol = styled(Col)`
  margin-bottom: 16px;
  padding: 32px;
  background-color: white;
  justify-content: center;
  ${borderBoxShadow};
  ${borderRadius};
`;

const Info = styled.div``;

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0;
  }
`;

const UserIcon = styled(AccountCircle)`
  margin: 0 auto;
  font-size: 5rem !important;
  display: block !important;
  path {
    fill: ${colors.primary};
  }
`;
