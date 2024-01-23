import { useCurrentUser } from '@/redux/features/authSlice';
import { useAppSelector } from '@/redux/hook';
import { TCurrentUser } from '@/types/commonTypes';

const MyProfile = () => {
  const userInfo = useAppSelector(useCurrentUser);
  const { username, email, role } = userInfo as TCurrentUser;
  return (
    <div className="md:w-4/6 md:mx-auto mt-10">
      <h4>Welcome to Profile Page, {username}</h4>
      <p>
        Your email is {email} and you are{' '}
        {role === 'user' ? 'a user' : 'an admin'}
      </p>
    </div>
  );
};

export default MyProfile;
