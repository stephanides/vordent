import { createStyles, makeStyles } from '@material-ui/core';
import { colors } from './colors';

export const useWebStyles = makeStyles(() =>
  createStyles({
    button: {
      '& label.Mui-focused': {
        color: 'grey',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'grey',
      },
      '& .MuiOutlinedInput-root': {
        '& .MuiOutlinedInput-input': {
          padding: '14px',
        },
        '& fieldset': {
          border: '1px solid #dee4e8',
        },
        '&:hover fieldset': {
          borderColor: '#005FA6',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#005FA6',
        },
      },
    },
    selectDisabled: {
      '& .MuiSelect-select': {
        color: '#afafaf',
      },
    },
    select: {
      '& label.Mui-focused': {
        color: colors.text,
      },
      '& .MuiSelect-select': {
        padding: '14px',
      },
      '& .MuiOutlinedInput-root': {
        backgroundColor: '#f4f7f8',
        fontSize: '0.875rem',
        '& fieldset': {
          border: '1px solid #dee4e8',
        },
        '&:hover fieldset': {
          borderColor: '#005FA6',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#005FA6',
        },
      },
    },
    selectDropdown: {
      border: '1px solid #005FA6',
      boxShadow: 'none',
      '& .MuiList-root': {
        padding: 0,
      },
      '& .MuiListItem-root': {
        fontSize: '0.875rem',
        fontWeight: '300',
        fontFamily: `'Rubik', sans-serif`,
        color: '#43515A',
        paddingTop: 9,
        paddingBottom: 9,
      },
      '& .MuiListItem-button:hover': {
        backgroundColor: 'rgba(0, 95, 166, 0.04)',
      },
    },
    textarea: {
      width: '100%',
      backgroundColor: '#f4f7f8',
      fontSize: '0.875rem',
      '& label.Mui-focused': {
        color: 'grey',
        fontSize: '0.875rem',
      },
      '& .MuiInputBase-input': {
        fontSize: '0.875rem',
      },
      '& .MuiOutlinedInput-root': {
        padding: 14,
        '& fieldset': {
          border: '1px solid #dee4e8',
          borderRadius: '8px',
        },
        '&:hover fieldset': {
          borderColor: '#005FA6',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#005FA6',
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
    paginationBlog: {
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
      '& .Mui-selected': {
        backgroundColor: colors.primary,
        color: colors.textInverted,
      },
      '& .Mui-selected:hover': {
        backgroundColor: colors.primary,
        color: colors.textInverted,
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
