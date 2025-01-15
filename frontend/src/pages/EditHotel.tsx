import { useQuery } from "react-query";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm.tsx";
import * as apiClient from "../api-client.ts";
import { useParams } from "react-router-dom";

const EditHotel = () => {
  const { hotelId } = useParams();
  const { data: hotel } = useQuery(
    "fetchMyHotelById",
    () => apiClient.fetchMyHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  return <ManageHotelForm hotel={hotel} />;
};

export default EditHotel;
