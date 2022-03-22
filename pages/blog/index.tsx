import { Blog } from '../../app-data/components/web/Blog';
import { SiteLayout } from '../../app-data/shared/components/SiteLayout';

const BlogPage: () => JSX.Element = () => (
  <>
    <SiteLayout>
      <Blog />
    </SiteLayout>
  </>
);

export default BlogPage;
