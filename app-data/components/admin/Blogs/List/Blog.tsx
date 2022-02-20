import React, { FC } from 'react';
import Link from 'next/link';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import { Col } from 'reactstrap';
import { Blog } from '../../../../shared/types';
import { borderBoxShadow, borderRadius } from '../../../../shared/design';

type BlogListItemProps = {
  blog: Blog;
  handleRemoveItem: (_id: string) => Promise<void>;
};

export const BlogListItem: FC<BlogListItemProps> = (props) => {
  const { blog, handleRemoveItem } = props;

  return (
    <Col size={12} xl={3} lg={4} md={6}>
      <Wrapper>
        <BlogImage src={blog.image.path} alt={blog.title} />
        <Title className="pb-4">{blog.title}</Title>
        <ActionHolder>
          <Link href={`/admin/blog/upravit-blog?id=${blog._id}`}>
            <IconButton edge="end">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleRemoveItem(blog._id)}
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

const BlogImage = styled.img`
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
