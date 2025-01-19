import { hotelFacilities } from "../config/hotel-options-config";

type Props = {
  facilities: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const StarHotelFacilitiesFilter = ({ facilities, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold mb-2">Facilities</h4>
      {hotelFacilities.map((facility) => (
        <label key={facility} className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="rounded"
            value={facility}
            checked={facilities.includes(facility)}
            onChange={onChange}
          />
          <span>{facility}</span>
        </label>
      ))}
    </div>
  );
};

export default StarHotelFacilitiesFilter;
