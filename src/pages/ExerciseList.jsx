import Layout from '../components/Layout';
import MainContent from '../components/MainContent';
import FilterSection from '../components/FilterSection';
import CustomerBoard from '../components/CustomerBoard';

const ExerciseList = () => {
  return (
    <div>
      <Layout>
        <MainContent>
          <FilterSection />
          <CustomerBoard />
        </MainContent>
      </Layout>
    </div>
  );
};

export default ExerciseList;