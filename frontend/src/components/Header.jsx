import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to='/'>MernHolidays.com</Link>
        </span>
        <span className="flex space-x-2">
          <Link className="" to='/sign-in'></Link>
        </span>
      </div>
    </div>
  );
};
