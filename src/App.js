import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import Auth0 from './Auth0';
import Tailwind from './Tailwind';
function App() {
  return (
    <div className="App">
      <div className='NavBar sticky top-0 w-full bg-blue-400 text-white flex items-center justify-between h-16'>
        <h4 className='text-black ml-4 font-extrabold text-2xl font-mono'>Login Page-auth0</h4>
        <div>
          <LoginButton/>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <LogoutButton/>
        </div>
      </div>
      <Profile/>
      <div className='flex justify-between mt-6'>
        <Auth0/>
        <Tailwind/>
      </div> 
    </div>
  );
}

export default App;
