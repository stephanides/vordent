import { useQuery } from '@apollo/client';
import React, { FC } from 'react';
import Select from 'react-select';
import { BLOGCATEGORIES_QUERY } from '../../../graphql/query';
import { colors } from '../../../shared/design';
import { Blog, Category } from '../../../shared/types';

type BlogCategorySelectProps = {
  allBlogs: Blog[];
  setFilteredBlogs: (value: React.SetStateAction<Blog[]>) => void;
  setCurrentPage?: (value: number) => void;
};

type SelectOption = {
  label: string;
  value: string;
};

export const BlogCategorySelect: FC<BlogCategorySelectProps> = (props) => {
  const { allBlogs, setFilteredBlogs, setCurrentPage } = props;
  const { error, loading, data } = useQuery(BLOGCATEGORIES_QUERY);

  if (loading) {
    return <></>;
  }

  if (error) {
    return <>{error.message}</>;
  }

  const { blogCategories } = data;

  const categoryOptions = blogCategories.map((category: Category) => ({
    value: category._id,
    label: category.title,
  }));

  const handleChange = (selectedOption: SelectOption) => {
    if (selectedOption.value === '') {
      setCurrentPage(1);
      return setFilteredBlogs(allBlogs);
    }
    const newArr = allBlogs.filter(
      (blog) => blog.category === selectedOption.value
    );
    setFilteredBlogs(newArr);
    setCurrentPage(1);
  };

  const options = [{ value: '', label: 'Všetko' }, ...categoryOptions];
  return (
    <Select
      styles={selectStyles}
      placeholder="Kategórie"
      options={options}
      onChange={handleChange}
    />
  );
};

const selectStyles = {
  control: (styles) => ({
    ...styles,
    fontSize: '0.875rem',
    color: colors.text,
    border: `1px solid ${colors.primary} !important`,
    boxShadow: 'none',
    borderRadius: '4px',
    padding: '2px',
    cursor: 'pointer',
    maxWidth: '450px',
  }),
  menu: (styles) => ({
    ...styles,
    maxWidth: '450px',
    border: `1px solid ${colors.primary} !important`,
    marginTop: '8px',
    borderRadius: '4px',
    fontSize: '0.875rem',
    color: colors.text,
  }),
  dropdownIndicator: () => ({
    color: `${colors.primary} !important`,
    display: 'flex',
    padding: '8px',
    transition: 'color 150ms',
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? colors.primary : 'white',
      color: isFocused ? 'white' : colors.text,
      cursor: 'pointer',
    };
  },
};
