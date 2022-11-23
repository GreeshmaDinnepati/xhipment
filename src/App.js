import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { adduser } from './features/Users';
import { useState } from 'react';
import { deleteuser } from './features/Users';
import { updateusername } from './features/Users';

function App() {
  const [name,setName] = useState('');
  const [username,setUserName] = useState('');
  const [newUsername,setNewUserName] = useState('');
  const userList = useSelector((state)=> state.users.value);
  const dispatch = useDispatch();

  const handleAdduser = () => {
    dispatch(adduser({no : userList[userList.length -1].no + 1 ,name : name, age: username}));
  }

  return (
    <div className="App">
      <div className='adduser'>
        <input type="text" placeholder = 'Name...' onChange={(e)=> setName(e.target.value)} />
        <input type="text" placeholder = 'userName...' onChange={(e)=> setUserName(e.target.value)} />
        <button onClick={handleAdduser}>add user</button>
      </div>
      <div className='displayuser'>
        {userList.map((user)=>{
          return(
            <div key={user.no}>
              <h1>{user.name}</h1>
              <h2>{user.age}</h2>
              <input type="text" placeholder='New Username' onChange={(e)=>setNewUserName(e.target.value)} /> 
              <button onClick={()=>dispatch(updateusername({no:user.no,name: newUsername}))}>update</button>
              <button onClick={()=> dispatch(deleteuser({no :user.no}))}>delete</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
