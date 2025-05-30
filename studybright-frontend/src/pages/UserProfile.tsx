import { getUser } from "@/state/auth/Action";
import { AppDispatch, RootState } from "@/state/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

// interface UserProfileData {
//   name: string;
//   email: string;
//   role: string;
//   joinedDate: string;
//   avatarUrl?: string;
// }

interface User{
  user?: {
    name: string;
    role: string;
    email:string;
  } | null;
}

const UserProfile = ({user}:User) => {
  // const [user, setUser] = useState<UserProfileData | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const jwt: string | null = localStorage.getItem("jwt");
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

    
  // useEffect(() => {
  //   if (jwt) {
  //     dispatch(getUser(jwt));
  //   } else {
  //     navigate("/login");
  //   }
  // }, [dispatch, jwt]);
    

  // Mocked user data - replace with actual API call

    // Simulate fetching user data
    // const mockUser: UserProfileData = {
    //   name: user.name,
    //   email: user.email,
    //   role: user.role,
    //   joinedDate: "2023-01-15",
    //   avatarUrl: "https://i.pravatar.cc/100?img=3"
    // };

  if (!user) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={"https://i.pravatar.cc/100?img=3"}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-2 border-brand-600"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">{user.role}</p>
            <p className="text-sm text-gray-500 mt-1">Joined: {new Date("2023-01-15").toDateString()}</p>
            <p className="text-sm text-gray-500">Email: {user.email}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Account Details</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><strong>Name:</strong> {user.name}</li>
              <li><strong>Email:</strong> {user.email}</li>
              <li><strong>Role:</strong> {user.role}</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Activity</h3>
            <p className="text-sm text-gray-600">Recent exams, scores, badges, etc. (Coming soon)</p>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white text-sm rounded shadow">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
