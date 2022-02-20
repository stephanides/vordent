import React from 'react';
import { SiteLayout } from '../../app-data/shared/components';
import { BLOG_BY_SLUG_QUERY } from '../../app-data/graphql/query';
import request from 'graphql-request';
import { baseUrl } from '../../app-data/shared/config';
import { API_URL } from '../../app-data/graphql/ApolloProvider';
import { BlogDetail } from '../../app-data/components/web';

type BlogDetailProps = {
  blogBySlug: any;
};

const BlogDetailPage: React.FC<BlogDetailProps> = (props) => {
  const { blogBySlug } = props;

  return (
    <SiteLayout
      previewImage={`${baseUrl}${blogBySlug.blog.image.path}`}
      title={blogBySlug.blog.title}
      description={blogBySlug.blog.subTitle}
      currentUrl={`${baseUrl}/blog/${blogBySlug.blog.slug}`}
    >
      <BlogDetail
        blog={blogBySlug.blog}
        categoryTitle={blogBySlug.categoryTitle}
        currentUrl={`${baseUrl}/blog/${blogBySlug.blog.slug}`}
      />
    </SiteLayout>
  );
};

export async function getServerSideProps({ query }) {
  const variables = {
    slug: query.slug,
  };
  const { blogBySlug } = await request(API_URL, BLOG_BY_SLUG_QUERY, variables);

  return { props: { blogBySlug } };
}

export default BlogDetailPage;
