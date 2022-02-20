import React, { useState } from 'react';
import styled from 'styled-components';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useSnackbar } from 'notistack';
import { CircularProgress } from '@material-ui/core';
import {
  colors,
  Heading3,
  media,
  PrimaryButton,
  useAdminStyles,
} from '../../../shared/design';
import Link from 'next/link';
import { useAuth } from '../../../shared/hooks';
import { Logo } from '../../../shared/components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  ${media.down.sm} {
    margin: 0 8px;
  }
`;

const Content = styled.div`
  padding: 48px;
  width: 100%;
  max-width: 472px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  position: relative;
  ${media.down.sm} {
    padding: 24px;
  }
`;

const StyledTextValidator = styled(TextValidator)`
  margin-bottom: 16px !important;
  width: 100%;
  color: ${colors.text};
  input {
    background-color: #f4f7f8;
    font-size: 0.875rem;
    border-radius: 8px;
  }
  fieldset {
    border: none;
  }
`;

const ActionHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
  }
  ${media.down.sm} {
    flex-direction: column;
    p {
      margin-bottom: 16px;
      justify-content: center;
    }
  }
`;
const StyledHeading3 = styled(Heading3)`
  color: ${colors.primary};
  text-align: center;
  margin-top: 60px;
  margin-bottom: 16px;
  font-size: 2rem;
  ${media.down.sm} {
    margin-top: 72px;
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: -46px;
  svg {
    width: 100px;
  }
`;
type User = {
  email: string;
  password: string;
};

export const LoginForm = (): JSX.Element => {
  const classes = useAdminStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { signIn } = useAuth();
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmitLogin: (
    event: React.FormEvent<HTMLFormElement>
  ) => Promise<void> = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      await signIn({
        email: user.email,
        password: user.password,
      });
      setIsLoading(false);
    } catch (err) {
      enqueueSnackbar('Nesprávne prihlasovacie údaje', {
        variant: 'error',
      });
      setIsLoading(false);
    }
  };

  return (
    <>
      <Wrapper>
        <Content>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <StyledHeading3>Prihlásenie</StyledHeading3>
          <ValidatorForm
            style={{ width: '360px', maxWidth: '100%' }}
            onSubmit={handleSubmitLogin}
          >
            <StyledTextValidator
              className={classes.button}
              variant="outlined"
              fullWidth
              placeholder="Email"
              value={user.email}
              name="email"
              validators={['required']}
              errorMessages={['Povinné pole']}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUser({
                  ...user,
                  email: event.currentTarget.value as string,
                });
              }}
            />
            <StyledTextValidator
              variant="outlined"
              className={classes.button}
              fullWidth
              placeholder="Heslo"
              value={user.password}
              name="password"
              type="password"
              validators={['required']}
              errorMessages={['Povinné pole']}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUser({
                  ...user,
                  password: event.currentTarget.value as string,
                });
              }}
            />
            <ActionHolder>
              <p>
                <small>
                  Nemáte účet?
                  <Link href="/admin/registracia">
                    <a style={{ color: '#75BD97' }}> zaregistrovať sa</a>
                  </Link>
                  .
                </small>
              </p>
              <PrimaryButton
                disabled={isLoading}
                variant="contained"
                type="submit"
                color="primary"
                style={{ display: 'flex' }}
              >
                Prihlásiť
              </PrimaryButton>
            </ActionHolder>
          </ValidatorForm>
        </Content>
      </Wrapper>
    </>
  );
};
