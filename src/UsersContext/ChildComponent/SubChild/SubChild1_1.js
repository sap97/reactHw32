import { useUser } from '../../UsersContext';

const SubChild1_1 = () => {
  const { user } = useUser();

  const handleUserClick = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const user = await response.json();
      selectUser(user);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <div className="SubChild1_1">
      {/* <button onClick={handleUserClick}>Select User 1 </button> */}
      <p>User from SubChild2_2: {user ? user.message : 'No user yet'}</p>

    </div>
  );
};

export default SubChild1_1;
