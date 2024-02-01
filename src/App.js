import logo from './logo.svg';
import './App.css';
import { UserProvider } from './UsersContext/UsersContext';
import Child1 from './UsersContext/ChildComponent/Child1';
import Child2 from './UsersContext/ChildComponent/Child2';

const App = () => {
  return (
    <div className='main'>
    <UserProvider>
      <div className="buttons">
        <Child1 />
        <Child2 />
      </div>
    </UserProvider>
    </div>
  );
};

export default App;
