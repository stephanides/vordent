import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import Link from 'next/link';
import styled from 'styled-components';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { REGISTER_USER_MUTATION } from '../../../graphql/mutation';
import { useSnackbar } from 'notistack';
import { CircularProgress } from '@material-ui/core';
import {
  colors,
  Heading3,
  media,
  PrimaryButton,
  useAdminStyles,
} from '../../../shared/design';
import { useRouter } from 'next/router';
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
  max-width: 440px;
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
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  retypePassword: string;
};

export const RegisterForm = (): JSX.Element => {
  const router = useRouter();
  const classes = useAdminStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    retypePassword: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [registerUserMutate] = useMutation(REGISTER_USER_MUTATION);

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== user.password) {
        return false;
      }
      return true;
    });
  });

  const handleSubmitRegister: (
    event: React.FormEvent<HTMLFormElement>
  ) => Promise<void> = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      await registerUserMutate({
        variables: {
          userRegInput: {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
          },
        },
      });
      setIsLoading(false);
      enqueueSnackbar('Registrácia prebehla úspešne', {
        variant: 'success',
      });
      router.push('/admin/prihlasenie');
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      enqueueSnackbar('Nastala chyba', {
        variant: 'error',
      });
    }
  };

  return (
    <>
      <Wrapper>
        <Content>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <StyledHeading3>Registrácia</StyledHeading3>
          <ValidatorForm
            style={{ width: '100%', maxWidth: '100%' }}
            onSubmit={handleSubmitRegister}
          >
            <StyledTextValidator
              className={classes.button}
              variant="outlined"
              fullWidth
              placeholder="Meno *"
              value={user.firstName}
              name="firstName"
              validators={['required']}
              errorMessages={['Povinné pole']}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUser({
                  ...user,
                  firstName: event.currentTarget.value as string,
                });
              }}
            />
            <StyledTextValidator
              className={classes.button}
              variant="outlined"
              fullWidth
              placeholder="Priezvisko *"
              value={user.lastName}
              name="lastName"
              validators={['required']}
              errorMessages={['Povinné pole']}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUser({
                  ...user,
                  lastName: event.currentTarget.value as string,
                });
              }}
            />
            <StyledTextValidator
              className={classes.button}
              variant="outlined"
              fullWidth
              placeholder="Email *"
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
              className={classes.button}
              variant="outlined"
              fullWidth
              placeholder="Heslo *"
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
            <StyledTextValidator
              className={classes.button}
              variant="outlined"
              fullWidth
              placeholder="Zopakovať heslo *"
              name="retypePassword"
              type="password"
              validators={['isPasswordMatch', 'required']}
              errorMessages={['Hesla sa nezhodujú', 'Povinné pole']}
              value={user.retypePassword}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUser({
                  ...user,
                  retypePassword: event.currentTarget.value as string,
                });
              }}
            />
            <ActionHolder>
              <p>
                <small>
                  Už máte účet?{' '}
                  <Link href="/admin/prihlasenie">
                    <a style={{ color: '#75BD97' }}>prihlásiť sa</a>
                  </Link>
                  .
                </small>
              </p>
              <PrimaryButton disabled={isLoading} type="submit">
                Registrovať
              </PrimaryButton>
            </ActionHolder>
          </ValidatorForm>
        </Content>
      </Wrapper>
    </>
  );
};
