import gql from 'graphql-tag';

export const LOGIN_USER_MUTATION = gql`
  mutation loginUser($userLoginInput: UserLoginInput!) {
    loginUser(userLoginInput: $userLoginInput) {
      _id
      email
      firstName
      lastName
      role
      token
      confirmed
    }
  }
`;

export const REGISTER_USER_MUTATION = gql`
  mutation registerUser($userRegInput: UserRegInput!) {
    registerUser(userRegInput: $userRegInput) {
      _id
      email
      firstName
      lastName
      role
      confirmed
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation updateUser($id: String!, $confirmed: Boolean!) {
    updateUser(id: $id, confirmed: $confirmed) {
      _id
      confirmed
      email
      firstName
      lastName
    }
  }
`;

export const SEND_CONTACT_FORM_MUTATION = gql`
  mutation sendContactForm($contactFormData: ContactFormInput!) {
    sendContactForm(contactFormData: $contactFormData)
  }
`;
