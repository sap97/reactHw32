import { useUser } from '../../UsersContext';

const SubChild2_2 = () => {
  const { updateUser } = useUser();

const handleUpdateUser  = () => {
  const useUser ={massage: "Hello from SubChild2_2!"};
  updateUser(useUser);
};


return ( 
      <div className="SubChild2_2">
        <button onClick={handleUpdateUser}>Update</button>
      </div>);

}
export default SubChild2_2;
