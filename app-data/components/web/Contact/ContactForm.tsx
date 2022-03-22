import { useRef, useState } from 'react';
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from 'react-material-ui-form-validator';
import clsx from 'clsx';
import styled from 'styled-components';
import { useSnackbar } from 'notistack';
import {
  colors,
  Heading2,
  Heading5,
  media,
  PrimaryButton,
  useWebStyles,
} from '../../../shared/design';
import { MenuItem, TextField } from '@material-ui/core';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useMutation } from '@apollo/client';
import { SEND_CONTACT_FORM_MUTATION } from '../../../graphql/mutation';

const initialValues = {
  ambulance: '',
  firstName: '',
  surname: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export const ContactForm = () => {
  const [data, setData] = useState(initialValues);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sendContactForm] = useMutation(SEND_CONTACT_FORM_MUTATION);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { enqueueSnackbar } = useSnackbar();
  const [agree, setAgree] = useState(false);
  const checkboxRef = useRef(null);
  const classes = useWebStyles();

  const handleSubmit: (
    event: React.FormEvent<HTMLFormElement>
  ) => Promise<void> = async (event) => {
    event.preventDefault();
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }
    const recaptchaToken = await executeRecaptcha('login');
    setIsLoading(true);
    try {
      await sendContactForm({
        variables: { contactFormData: { ...data, recaptchaToken } },
      });
      enqueueSnackbar('Správa bola odoslaná', {
        variant: 'success',
      });
      setIsLoading(false);
    } catch (err) {
      enqueueSnackbar('Nastala chyba', {
        variant: 'error',
      });
      setIsLoading(false);
    }
  };

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  const handleService = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setData({
      ...data,
      service: event.target.value as string,
    });
  };

  const handleAmbulance = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setData({
      ...data,
      ambulance: event.target.value as string,
    });
  };

  return (
    <>
      <Title>Objednávkový formular</Title>
      <StyledValidatorForm onSubmit={handleSubmit}>
        <StyledSelectValidator
          className={clsx(
            classes.select,
            data.ambulance === '' ? classes.selectDisabled : null
          )}
          variant="outlined"
          value={data.ambulance}
          onChange={handleAmbulance}
          SelectProps={{
            displayEmpty: true,
            MenuProps: { classes: { paper: classes.selectDropdown } },
          }}
          validators={['required']}
          errorMessages={['Povinné pole']}
        >
          <MenuItem value="" disabled>
            Vyberte ambulanciu lekára*
          </MenuItem>
          <MenuItem value="Richard">
            <img src="/icons/contact/richard.svg" className="mr-2" />
            MDDr. Richard Vorobeľ
          </MenuItem>
          <MenuItem value="Martin">
            <img src="/icons/contact/martin.svg" className="mr-2" />
            MUDr. Martin Vorobeľ
          </MenuItem>
        </StyledSelectValidator>
        <Subtitle>Vyplňte formulár a budeme vás kontaktovať:</Subtitle>
        <StyledTextValidator
          className={classes.button}
          variant="outlined"
          fullWidth
          placeholder="Meno*"
          value={data.firstName}
          name="firstname"
          validators={['required']}
          errorMessages={['Povinné pole']}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setData({
              ...data,
              firstName: event.currentTarget.value as string,
            });
          }}
        />
        <StyledTextValidator
          className={classes.button}
          variant="outlined"
          fullWidth
          placeholder="Priezvisko*"
          value={data.surname}
          name="surname"
          validators={['required']}
          errorMessages={['Povinné pole']}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setData({
              ...data,
              surname: event.currentTarget.value as string,
            });
          }}
        />
        <StyledTextValidator
          className={classes.button}
          variant="outlined"
          fullWidth
          placeholder="Email*"
          value={data.email}
          name="email"
          type="email"
          validators={['required']}
          errorMessages={['Povinné pole']}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setData({
              ...data,
              email: event.currentTarget.value as string,
            });
          }}
        />
        <StyledTextValidator
          className={classes.button}
          variant="outlined"
          fullWidth
          placeholder="Telefónne číslo*"
          value={data.phone}
          name="phone"
          type="tel"
          validators={['required']}
          errorMessages={['Povinné pole']}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setData({
              ...data,
              phone: event.currentTarget.value as string,
            });
          }}
        />
        <StyledSelectValidator
          className={clsx(
            classes.select,
            data.service === '' ? classes.selectDisabled : null
          )}
          variant="outlined"
          value={data.service}
          onChange={handleService}
          SelectProps={{
            displayEmpty: true,
            MenuProps: { classes: { paper: classes.selectDropdown } },
          }}
          validators={['required']}
          errorMessages={['Povinné pole']}
        >
          <MenuItem value="" disabled>
            Vyberte typ služby*
          </MenuItem>
          <MenuItem value="Implantológia">Implantológia</MenuItem>
          <MenuItem value="Ošetrenie bolestivého zuba">
            Ošetrenie bolestivého zuba
          </MenuItem>
          <MenuItem value="Protetická stomatológia">
            Protetická stomatológia
          </MenuItem>
          <MenuItem value="Celokeramické korunky">
            Celokeramické korunky
          </MenuItem>
          <MenuItem value="Dentálna hygiena">Dentálna hygiena</MenuItem>
          <MenuItem value="Bielenie">Bielenie</MenuItem>
          <MenuItem value="Iné">Iné</MenuItem>
        </StyledSelectValidator>
        <TextField
          className={classes.textarea}
          placeholder="Vaša správa"
          variant="outlined"
          multiline
          minRows={6}
          maxRows={6}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setData({
              ...data,
              message: event.currentTarget.value as string,
            });
          }}
        />
        <Checkbox>
          <CheckboxInput
            type="checkbox"
            id="agreement"
            name="agreement"
            onChange={checkboxHandler}
          />
          <CheckboxLabel htmlFor="agreement">
            Súhlasím so spracovaním osobných údajov*
          </CheckboxLabel>
        </Checkbox>
        <InfoText>
          * vyšie súhlasíte, že spoločnosť Aesculap dent, s.r.o., a VORDENT
          s.r.o. budú spracúvať osobné údaje výhradne za účelom vybavenia Vašej
          objednávky. Viac informácií ochrana osobných údajov.
          <Patient src="/images/contact-patient.png" />
        </InfoText>
        <SubmitButton
          disabled={isLoading || !agree}
          variant="contained"
          type="submit"
          color="primary"
        >
          Odoslať
        </SubmitButton>
      </StyledValidatorForm>
    </>
  );
};

const StyledValidatorForm = styled(ValidatorForm)`
  width: 450px;
  maxwidth: 100%;
  ${media.down.lg} {
    width: 100%;
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
    border: 1px solid #dee4e8;
  }
`;

const StyledSelectValidator = styled(SelectValidator)`
  margin-bottom: 16px !important;
  width: 100%;
  color: ${colors.text};
  input {
    background-color: #f4f7f8;
    font-size: 0.875rem;
    border-radius: 8px;
  }
  fieldset {
    border: 1px solid #dee4e8;
  }
`;

const Title = styled(Heading2)`
  font-size: 2.5rem;
  font-weight: 400;
  color: ${colors.text};
  margin-bottom: 68px;
`;

const Subtitle = styled(Heading5)`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${colors.text};
  margin-top: 68px;
  margin-bottom: 20px;
`;

const Checkbox = styled.div`
  margin: 30px 0;
  cursor: pointer;
`;

const CheckboxInput = styled.input``;

const CheckboxLabel = styled.label`
  margin-left: 9px;
  color: ${colors.text};
  font-size: 0.875rem;
  margin-bottom: 0;
  cursor: pointer;
`;

const InfoText = styled.p`
  font-size: 0.625rem;
  margin-bottom: 30px;
  position: relative;
  padding-right: 88px;
`;

const SubmitButton = styled(PrimaryButton)`
  min-width: 186px;
`;

const Patient = styled.img`
  position: absolute;
  right: 0;
  top: -6px;
  ${media.down.xl} {
    top: 15px;
  }
  ${media.down.lg} {
    display: none;
  }
`;
