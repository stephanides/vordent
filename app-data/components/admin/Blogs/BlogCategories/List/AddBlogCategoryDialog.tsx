import { Dialog, DialogTitle } from '@material-ui/core';
import { BlogCategoryForm } from '../Form';

type AddBlogCategoryDialogProps = {
  open: boolean;
  onClose: () => void;
};

export const AddBlogCategoryDialog = (props: AddBlogCategoryDialogProps) => {
  const { open, onClose } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="add-category-dialog"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="add-category-dialog">
        Vytvoriť kategóriu blogu
      </DialogTitle>
      <BlogCategoryForm onClose={onClose} />
    </Dialog>
  );
};
