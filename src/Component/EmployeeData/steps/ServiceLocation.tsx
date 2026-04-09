import Field from "../Field";
import { useProvince } from "../../../hooks/EmployeeData/useProvince";
import { useDistrict } from "../../../hooks/EmployeeData/useDistrict";
import "../../../style/Employee.css";
import { useCountries } from "../../../hooks/EmployeeData/useCountries";

const ServiceLocation = ({ formData, handleChange, errors }: any) => {
  const {
    data: countries,
    isLoading: countryLoading,
    isError: countryError,
  } = useCountries(true);

  const {
    data: provinces,
    isLoading: provinceLoading,
    isError: provinceError,
    refetch: refetchProvinces,
  } = useProvince(false);

  const {
    data: districts,
    isLoading: districtLoading,
    isError: districtError,
    refetch: refetchDistricts,
  } = useDistrict(formData.serviceProvince, false);

  //  Fetch provinces on click
  const handleProvinceClick = () => {
    if ((!provinces || provinces.length === 0) && !provinceLoading) {
      refetchProvinces();
    }
    if (provinceError) {
      refetchProvinces();
    }
  };

  //  Fetch districts on click
  const handleDistrictClick = () => {
    if (!formData.serviceProvince) return;

    if ((!districts || districts.length === 0) && !districtLoading) {
      refetchDistricts();
    }
    if (districtError) {
      refetchDistricts();
    }
  };

  //  Reset district when province changes
  const handleProvinceChange = (value: string) => {
    handleChange("serviceProvince", value);
    handleChange("serviceDistrict", "");
  };

  // Country options
  const renderCountryOptions = () => {
    if (countryLoading) return <option value="">Loading...</option>;
    if (countryError) return <option value="">Failed to load</option>;
    if (!Array.isArray(countries) || countries.length === 0) return null;

    return countries.map((item: any) => (
      <option
        key={item.countryId ?? item.id ?? item.name}
        value={item.countryId ?? item.id ?? item.name}
      >
        {item.name ?? item.label}
      </option>
    ));
  };

  //  Province options
  const renderProvinceOptions = () => {
    if (provinceLoading) return <option value="">Loading...</option>;
    if (provinceError) return <option value="">Failed to load</option>;
    if (!Array.isArray(provinces) || provinces.length === 0) return null;

    return provinces.map((item: any) => (
      <option
        key={item.provinceKey ?? item.provinceId ?? item.id ?? item.name}
        value={item.provinceKey ?? item.provinceId ?? item.id ?? item.name}
      >
        {item.name ?? item.label ?? item.provinceKey}
      </option>
    ));
  };

  //  District options
  const renderDistrictOptions = () => {
    if (!formData.serviceProvince) {
      return <option value="">Select province first</option>;
    }
    if (districtLoading) return <option value="">Loading...</option>;
    if (districtError) return <option value="">Failed to load</option>;
    if (!Array.isArray(districts) || districts.length === 0) return null;

    return districts.map((item: any) => (
      <option
        key={item.districtKey ?? item.districtId ?? item.id ?? item.name}
        value={item.districtKey ?? item.districtId ?? item.id ?? item.name}
      >
        {item.name ?? item.label ?? item.districtKey}
      </option>
    ));
  };

  return (
    <>
      {/*  Country Dropdown */}
      <Field
        label="Country"
        value={formData.countryKey}
        error={errors.countryKey}
        onChange={(e: any) =>
          handleChange("countryKey", e.target.value)
        }
      >
        <select
          className="form-select form-select-sm"
          disabled={countryLoading}
        >
          <option value="">Select</option>
          {renderCountryOptions()}
        </select>
      </Field>

      {/*  Province */}
      <Field
        label="Province"
        value={formData.provinceKey}
        error={errors.provinceKey}
        onChange={(e: any) =>
          handleProvinceChange(e.target.value)
        }
      >
        <select
          className="form-select form-select-sm"
          onClick={handleProvinceClick}
          disabled={provinceLoading}
        >
          <option value="">Select</option>
          {renderProvinceOptions()}
        </select>
      </Field>

      {/*  District */}
      <Field
        label="District"
        value={formData.districtKey}
        error={errors.districtKey}
        onChange={(e: any) =>
          handleChange("districtKey", e.target.value)
        }
      >
        <select
          className="form-select form-select-sm"
          onClick={handleDistrictClick}
          disabled={districtLoading || !formData.serviceProvince}
        >
          <option value="">Select</option>
          {renderDistrictOptions()}
        </select>
      </Field>
    </>
  );
};

export default ServiceLocation;