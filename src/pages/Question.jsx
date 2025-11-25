import Layout from '../components/Layout';
import MainContent from '../components/MainContent';
import TabSection from '../components/TabSection';
import BodySection from '../components/BodySection';
import SearchSection from '../components/SearchSection';

const Question = () => {
  return (
    <Layout>
      <MainContent>
        <TabSection />
        <SearchSection />
        <BodySection />
      </MainContent>
    </Layout>
  );
};

export default Question;