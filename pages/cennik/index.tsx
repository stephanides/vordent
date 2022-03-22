import { PriceList } from '../../app-data/components/web/PriceList';
import { SiteLayout } from '../../app-data/shared/components/SiteLayout';

const PriceListPage: () => JSX.Element = () => (
  <>
    <SiteLayout>
      <PriceList />
    </SiteLayout>
  </>
);

export default PriceListPage;
