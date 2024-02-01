import { useUser } from '../../UsersContext';

const SubChild2_1 = () => {
  const { selectedUser } = useUser();

  return (
    <div className="SubChild2_1">
      {selectedUser && <p>User Selected: {selectedUser.name}</p>}
    </div>
  );
};

export default SubChild2_1;
