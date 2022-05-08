import React, { FC } from 'react';
import Link from 'next/link';
import DeleteIcon from '@material-ui/icons/Delete';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import { Col } from 'reactstrap';
import {
  borderBoxShadow,
  borderRadius,
  Paragraph,
} from '../../../shared/design';
import { GalleryItem } from '../../../shared/types';
import { useSnackbar } from 'notistack';

type GalleryItemProps = {
  item: GalleryItem;
  handleRemoveItem: (_id: string) => Promise<void>;
  count?: number;
};

export const GalleryItemComponent: FC<GalleryItemProps> = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const { item, handleRemoveItem, count } = props;

  const handleCopyUrl = (text: string) => {
    navigator.clipboard.writeText(text);

    enqueueSnackbar('Adresa bola skopirovaná!', {
      variant: 'success',
    });
  };

  return (
    <Col size={12} xl={count ?? 3} lg={count ?? 4} md={6}>
      <Wrapper>
        <Title className="pb-4">{item.image.title}</Title>
        <Image src={item.image.path} alt={item.image.title} />
        <StyledParagraph className="mt-4 mb-0 p-2 text-center w-100">
          {window.location.origin + item.image.path}
        </StyledParagraph>
        <ActionHolder>
          <IconButton
            edge="end"
            aria-label="copy"
            onClick={() =>
              handleCopyUrl(window.location.origin + item.image.path)
            }
          >
            <FileCopyIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleRemoveItem(item._id)}
          >
            <DeleteIcon />
          </IconButton>
        </ActionHolder>
      </Wrapper>
    </Col>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  height: 100%;
  ${borderBoxShadow};
  ${borderRadius};
`;

const ActionHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.125rem;
  color: black;
  text-transform: uppercase;
  padding: 0px 10px;
  margin-top: 20px;
`;

const StyledParagraph = styled(Paragraph)`
  word-break: break-all;
`;
