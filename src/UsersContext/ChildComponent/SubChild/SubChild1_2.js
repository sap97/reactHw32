import { useUser } from '../../UsersContext';

const SubChild1_2 = () => {
  const { selectUser } = useUser();

  const handleUserClick = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
      const user = await response.json();
      selectUser(user);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <div className="SubChild1_2">
      <button onClick={handleUserClick}>Select User 2</button>
    </div>
  );
};

export default SubChild1_2;
