import { useMutation, useQuery } from '@apollo/client';
import { useSnackbar } from 'notistack';
import { Row } from 'reactstrap';
import { REMOVE_GALLERY_ITEM_MUTATION } from '../../../graphql/mutation';
import { GALLERY_ITEMS_QUERY } from '../../../graphql/query';
import { GalleryItem } from '../../../shared/types';
import { GalleryItemComponent } from './GalleryItem';

type GalleryItemsProps = {
  count?: number;
};

export const GalleryItems = (props: GalleryItemsProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const { error, loading, data } = useQuery(GALLERY_ITEMS_QUERY);
  const [removeRecipe] = useMutation(REMOVE_GALLERY_ITEM_MUTATION, {
    refetchQueries: [{ query: GALLERY_ITEMS_QUERY }],
  });

  if (loading) {
    return <></>;
  }

  if (error) {
    return <>{error.message}</>;
  }

  const { galleryItems } = data;

  const handleRemoveItem: (_id: string) => Promise<void> = async (_id) => {
    try {
      await removeRecipe({ variables: { _id } });
      enqueueSnackbar('Blog bol úspešne odstránený', {
        variant: 'success',
      });
    } catch (err) {
      console.log(err);
      enqueueSnackbar('Nastala neočakávaná chyba', {
        variant: 'error',
      });
    }
  };

  return (
    <>
      <Row>
        {galleryItems.map((item: GalleryItem) => (
          <GalleryItemComponent
            key={item._id}
            item={item}
            handleRemoveItem={handleRemoveItem}
            count={props.count}
          />
        ))}
      </Row>
      {galleryItems.length === 0 && <h6>Nie sú pridané žiadne obrázky.</h6>}
    </>
  );
};
