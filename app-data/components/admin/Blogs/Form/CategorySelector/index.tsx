import React, { FC, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery } from '@apollo/client';
import Selector from '../Selector';
import { BLOGCATEGORIES_QUERY } from '../../../../../graphql/query';

const CategorySelector: FC<{
  blogData: any;
  setBlogData: (data: any) => void;
}> = (props) => {
  const { blogData, setBlogData } = props;
  const [selected, setSelected] = useState('');
  const { error, loading, data } = useQuery(BLOGCATEGORIES_QUERY);

  if (error) {
    return <>{error.message}</>;
  }

  if (loading) {
    return <CircularProgress color="primary" />;
  }

  const { blogCategories } = data;

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setSelected(event.target.value as string);
    setBlogData({
      ...blogData,
      category: event.target.value as string,
    });
  };
  const handleSetDefValue: (id: string) => void = (id) => {
    setSelected(id);
  };

  return (
    <Selector
      dataId={blogData.category}
      data={blogCategories}
      change={handleChange}
      selected={selected}
      setDefault={handleSetDefValue}
      title="Kategória*"
    />
  );
};

export default CategorySelector;
