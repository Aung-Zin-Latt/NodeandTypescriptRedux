import 'semantic-ui-css/semantic.min.css'
import { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../redux/store";
import { StateDataType } from '../datatypes/userDataTypes';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/actions/userActions';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null)
  const { user } = useSelector((state: StateDataType) => state.user);

  // Update the logged-in state when the user changes
  useEffect(() => {
    if (user && user.login === true){
      // setIsLoggedIn(true);
      setIsOpen(false);
      console.log("This login is TRUEEEEE")
      navigate("/")
    }
    else if (user && user?.login === false)
    {
    setIsOpen(false);
    }
    else {
      // setIsLoggedIn(false);
      setIsOpen(false)
      console.log("This login is FALSEEEEE")
      // navigate("/login")
    }
  }, [user])

  // Profile menu in & out
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [])
  
  

  const handleLogout = () => {
    // setIsLoggedIn(false);
    setIsOpen(false);
    // localStorage.removeItem('token'); // Remove token from local storage or perform any other necessary actions
    dispatch(logoutUser());
    navigate('/login');
  }
  return (
    <nav>
    <div className="">
      <div className="flex justify-between h-16 px-10 shadow items-center">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">Tailwind</h1>
          <div className="hidden md:flex justify-around space-x-4">
            <a href="#" className="hover:text-indigo-600 text-gray-700">Home</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">About</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">Service</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">Contact</a>
          </div>
        </div>
        <div className="flex space-x-4 items-center">

          {user && user.login ? (
              <div className="relative" ref={dropDownRef}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-800 text-sm"
                >
                  Profile
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow">
                    <ul className="py-2">
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Option 1
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Option 2
                      </li>
                      <li 
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <>
                <a href="/login" className="text-gray-800 text-sm">
                  LOGIN
                </a>
                <a
                  href="/register"
                  className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
                >
                  SIGNUP
                </a>
              </>
            )}
          
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Header;
