import React, { FC, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { Category, CategoryInput } from '../../../../../shared/types';
import { Collapse } from 'reactstrap';
import {
  borderBoxShadow,
  borderRadius,
  PrimaryButton,
  StyledTextField,
  useAdminStyles,
} from '../../../../../shared/design';
import styled from 'styled-components';

type CategoryListItemProps = {
  category: Category;
  handleRemoveItem: (_id: string) => Promise<void>;
  handleUpdateItem: (_id: string, title: string) => Promise<void>;
};

export const CategoryListItem: FC<CategoryListItemProps> = (props) => {
  const classes = useAdminStyles();
  const { category, handleRemoveItem, handleUpdateItem } = props;
  const [categoryFormData, setCategoryFormData] = useState<CategoryInput>({
    title: category.title || '',
  });
  const [error, setError] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => setEditMode(!editMode);

  const updateCategory = () => {
    if (categoryFormData.title === '') {
      return setError(true);
    }
    handleUpdateItem(category._id, categoryFormData.title);
  };

  return (
    <Wrapper>
      <ListItem>
        <ListItemText primary={category.title} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={toggleEditMode}>
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleRemoveItem(category._id)}
          >
            <DeleteIcon color="error" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse isOpen={editMode}>
        <CollapseWrapper>
          <StyledTextField
            className={classes.button}
            variant="outlined"
            placeholder="Názov kategorie"
            error={error}
            helperText={error ? 'Pole nesmie byť prázdne' : ''}
            fullWidth
            required
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCategoryFormData({
                ...categoryFormData,
                title: event.currentTarget.value as string,
              });
            }}
          />
          <PrimaryButton onClick={updateCategory}>Upraviť</PrimaryButton>
        </CollapseWrapper>
      </Collapse>
    </Wrapper>
  );
};

const CollapseWrapper = styled.div`
  padding: 16px;
`;

const Wrapper = styled.div`
  ${borderBoxShadow};
  ${borderRadius};
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
`;
