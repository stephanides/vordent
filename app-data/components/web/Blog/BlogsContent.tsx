import React, { FC, useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import { CustomPagination } from '../../../shared/components';
import { BlogThumbnail } from '../../../shared/components/BlogThumbnail';
import { useWebStyles } from '../../../shared/design';
import { Blog } from '../../../shared/types';
import { BlogCategorySelect } from './BlogCategorySelect';

type BlogsContentProps = {
  blogs: Blog[];
};

export const BlogsContent: FC<BlogsContentProps> = (props) => {
  const { blogs } = props;
  const styles = useWebStyles();
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [blogsToShow, setBlogsToShow] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs]);

  useEffect(() => {
    setBlogsToShow(filteredBlogs.slice((currentPage - 1) * 3, currentPage * 3));
  }, [currentPage, filteredBlogs]);

  return (
    <>
      <Row>
        <Col size={12} md={6}>
          <BlogCategorySelect
            allBlogs={blogs}
            setFilteredBlogs={setFilteredBlogs}
            setCurrentPage={setCurrentPage}
          />
        </Col>
      </Row>
      <BlogsWrapper>
        <Row>
          {blogsToShow.map((blog: Blog) => (
            <BlogThumbnail blog={blog} key={blog._id} />
          ))}
        </Row>
      </BlogsWrapper>
      {filteredBlogs.length > 3 && (
        <CustomPagination
          className={styles.paginationBlog}
          pageCount={Math.ceil(filteredBlogs.length / 3)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

const BlogsWrapper = styled.div`
  margin-top: 40px;
`;
