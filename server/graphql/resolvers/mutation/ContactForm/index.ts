import nodemailer from 'nodemailer';
import { config } from '../../../../config';
import { validateHuman } from '../../utils';
import ModError from '../../utils/error';

function sendContactFormEmail(formData: any): Promise<void> {
  const { email } = config;
  return new Promise(async (resolve, reject) => {
    try {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: email.host,
        port: 465, // 587,
        secure: true, // true, // ssl
        auth: {
          user: email.user, // generated ethereal user
          pass: email.pass, // generated ethereal password
        },
      });

      if (formData.ambulance === 'Richard') {
        await transporter.sendMail({
          from: '"Vordent" <objednavky@vordent.sk>',
          to: 'aesculapdent@gmail.com', // list of receivers
          subject: 'Objednávka zo stránky vordent.sk', // Subject line
          html: `<p>Meno a priezvisko: ${formData.firstName} ${formData.surname}</p><p>Email: <a href='mailto:${formData.email}'>${formData.email}</a></p><p>Telefón: <a href='tel:${formData.phone}'>${formData.phone}</a></p><p>Správa: <span style="font-weight: bold">${formData.message}</span></p><p>Služba: <span style="font-weight: bold">${formData.service}</span></p>`, // html body
        });
      } else {
        await transporter.sendMail({
          from: '"Vordent" <objednavky@vordent.sk>',
          to: 'info@vordent.sk', // list of receivers
          subject: 'Objednávka zo stránky vordent.sk', // Subject line
          html: `<p>Meno a priezvisko: ${formData.firstName} ${formData.surname}</p><p>Email: <a href='mailto:${formData.email}'>${formData.email}</a></p><p>Telefón: <a href='tel:${formData.phone}'>${formData.phone}</a></p><p>Správa: <span style="font-weight: bold">${formData.message}</span></p><p>Služba: <span style="font-weight: bold">${formData.service}</span></p>`, // html body
        });
      }
      resolve();
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}

export const sendContactForm = async (
  root: any,
  args: {
    contactFormData: any;
  },
  ctx: any
): Promise<String> => {
  const { contactFormData } = args;

  const human = await validateHuman(contactFormData.recaptchaToken);

  if (!human) {
    throw new ModError(400, 'You are robot!');
  }

  try {
    await sendContactFormEmail(contactFormData);

    return 'success';
  } catch (err) {
    throw new Error(err.message);
  }
};
