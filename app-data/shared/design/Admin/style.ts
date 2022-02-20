import { createStyles, makeStyles } from '@material-ui/core';
import { colors } from '../colors';

export const useAdminStyles = makeStyles(() =>
  createStyles({
    button: {
      '& label.Mui-focused': {
        color: 'grey',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'grey',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'grey',
        },
        '&:hover fieldset': {
          borderColor: 'grey',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'grey',
        },
      },
    },
    select: {
      '& label.Mui-focused': {
        color: colors.text,
      },
      '& .MuiOutlinedInput-root': {
        backgroundColor: '#f4f7f8',
        fontSize: '0.875rem',
        borderRadius: '8px',
        '& fieldset': {
          border: 'none',
        },
        '&:hover fieldset': {
          border: 'none',
        },
        '&.Mui-focused fieldset': {
          border: 'none',
        },
      },
    },
    textarea: {
      '& label.Mui-focused': {
        color: 'grey',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'grey',
        },
        '&:hover fieldset': {
          borderColor: 'grey',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'grey',
        },
      },
    },
    imageInput: {
      display: 'none',
    },
    checkbox: {
      '& .Mui-checked': {
        color: colors.primary,
      },
    },
    pagination: {
      '& .MuiPagination-ul': {
        justifyContent: 'center',
        marginTop: '32px',
        '& li': {
          '& button': {
            width: '40px',
            height: '40px',
            borderRadius: '20px',
          },
          '&:first-child': {
            '& button': {
              backgroundColor: colors.primary,
            },
            '& svg': {
              color: 'white',
            },
          },
          '&:last-child': {
            '& button': {
              backgroundColor: colors.primary,
            },
            '& svg': {
              color: 'white',
            },
          },
        },
      },
    },
  })
);
