import SubChild1_1 from './SubChild/SubChild1_1';
import SubChild1_2 from './SubChild/SubChild1_2';

const Child1 = () => {
  return (
    <div className="Child1">
      <SubChild1_1 />
      <SubChild1_2 />
    </div>
  );
};

export default Child1;
