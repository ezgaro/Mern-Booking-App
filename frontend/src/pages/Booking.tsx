import { useQuery } from "react-query";
import * as apiClient from "../api-client.ts";
import BookingForm from "../forms/BookingForm/BookingForm.tsx";

const Booking = () => {
  const { data: currentUser } = useQuery(
    "fetchCurrentUser",
    apiClient.fetchCurrentUser
  );

  console.log(currentUser?.email);

  return (
    <div className="grid md:grid-cols-[1fr_2fr]">
      <div className="bg-green-200">BOOKING DETAILS SUMMARY</div>
      {currentUser && <BookingForm currentUser={currentUser} />}
    </div>
  );
};

export default Booking;
