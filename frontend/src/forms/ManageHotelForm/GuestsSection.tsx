import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Guests</h2>
      <div className="flex gap-5 bg-gray-300 p-2">
        <label className="text-gray-700 text-sm font-semibold flex-1 py-6 px-3">
          Adults
          <input
            type="number"
            min={1}
            className="border rounded w-full py-2 px-3 font-normal"
            {...register("adultCount", { required: "This field is required" })}
          />
          {errors.childCount?.message && (
            <span className="text-red-500 text-sm font-bold">
              {errors.childCount?.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1 py-8 px-3">
          Children
          <input
            type="number"
            min={0}
            className="border rounded w-full py-2 px-3 font-normal"
            {...register("childCount", { required: "This field is required" })}
          />
          {errors.adultCount?.message && (
            <span className="text-red-500 text-sm font-bold">
              {errors.adultCount?.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestSection;
