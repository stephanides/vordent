import { gql } from 'apollo-server-express';

const ContactForm = gql`
  input ContactFormInput {
    firstName: String!
    surname: String!
    phone: String!
    email: String!
    message: String
    ambulance: String!
    service: String!
    recaptchaToken: String
  }
`;

export default ContactForm;
