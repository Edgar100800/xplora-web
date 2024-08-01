import { useState, useEffect, useRef, Dispatch, SetStateAction, } from "react";
import {useJsApiLoader, GoogleMap, Marker, Autocomplete, Libraries,} from "@react-google-maps/api";
import { LOCATION_FORM_STORE_STATUS, LocationFormStoreStatusType } from "@/lib/newstore-form-definitions";
import { useCounterStoreForm } from "@/hooks/use-new-store-form";
import { useStoreFormNavigationBar } from '@/hooks/use-new-store-navigation-bar';
const libraries: Libraries = ["places"];

const InputField = ({ id, label, placeholder, type = 'text', value, onChange }: { id: string, label: string, placeholder: string, type?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <div className="">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={value}
        onChange={onChange}
      />
      
    </div>
  );
};

interface LocationGoogleFormsProps {
  setAppStatus: Dispatch<SetStateAction<LocationFormStoreStatusType>>;
  appStatus: LocationFormStoreStatusType;
}

function LocationGoogleForms({setAppStatus,appStatus}: LocationGoogleFormsProps) {
  const { nextAvailable, setNextAvailable, handleNextButtomChange } = useStoreFormNavigationBar();
  const {store, updateStore} = useCounterStoreForm();
  const [defaultcenter, setDefaultcenter] = useState({ lat: 0, lng: 0 });
  const [center, setCenter] = useState({
    lat: defaultcenter.lat,
    lng: defaultcenter.lng,
  });
  
  // --- Formatos para el formulario
  const [address, setAddress] = useState<string>("");
  const [reference, setReference] = useState<string >("");
  const [district, setDistrict] = useState<string >("");
  const [postalCode, setPostalCode] = useState<string >("");
  const [region, setRegion] = useState<string >("");
  const [country, setCountry] = useState<string >("");
  // --- Fin de formatos para el formulario
  

  const mapOptions = {
    styles: [
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi.business",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "transit",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
        },
    ],
    disableDefaultUI: true, // Optionally disable default UI controls
    
  };
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setDefaultcenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          setDefaultcenter({ lat: 0, lng: 0 });
        }
      );
    }
  }, []);

  useEffect(() => {
    setCenter(defaultcenter);
  }, [defaultcenter]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    libraries: libraries,
  });

  if (!isLoaded) {
    return <div>Cargando mapa...</div>;
  }

  const handleMarkerDragEnd = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setCenter({ lat, lng });
      updateStore({address: { coordinates: { latitude: lat, longitude: lng }}});

      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          setAddress(results[0].formatted_address);
        } else {
          console.error(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    } else {
      console.error("latLng is null");
    }
  };

  const onPlaceSelected = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place && place.geometry) {
        const location = place.geometry.location;
        if (location?.lat && location?.lng) {
          
          // coordinates
          const lat = location.lat();
          const lng = location.lng();
          setCenter({ lat, lng });
          updateStore({address: { coordinates: { latitude: lat, longitude: lng }}});

          console.log(place.address_components);
      
          
          let number = "";
          if (place.address_components != undefined) {
            for (const component of place.address_components) {
              const types = component.types;
              if (types.includes("street_number")) {
                number = component.long_name;
              }
              if (types.includes("route")) {
                setAddress(component.long_name + " " + number);
              }
              if (types.includes("locality")) {
                setDistrict(component.long_name);
              }
              if (types.includes("administrative_area_level_2")) { // This is typically the district
                setRegion(component.long_name);
              }
              if (types.includes("country")) {
                setCountry(component.long_name);
              }
              if (types.includes("postal_code")) {
                setPostalCode(component.long_name);
              }
            }
            // setAddress(address.trim());
          }

          setAppStatus(LOCATION_FORM_STORE_STATUS.ADDRESS_INFORMATION);
          
          // HandleChange("latitude", lat.toString());
          // HandleChange("longitude", lng.toString());
          // HandleChange("address", place.formatted_address);
        }
      }
    }
  };

  const handleSetAddres = () => {
    updateStore({address: { street: address, city: district, state: region, zip: postalCode}});
    setAppStatus(LOCATION_FORM_STORE_STATUS.COORDINATES_INFORMATION);
    setNextAvailable(true);
  };

  const handleSetCoordinates = () => {
    updateStore({address: { coordinates: { latitude: center.lat, longitude: center.lng }}});
    setAppStatus(LOCATION_FORM_STORE_STATUS.FINISHED);
  }

  return (
    <div className="text-lg">
      {appStatus === LOCATION_FORM_STORE_STATUS.IDLE && (
        <Autocomplete
          onLoad={(ref) => (autocompleteRef.current = ref)}
          onPlaceChanged={onPlaceSelected}
          className="pb-4"
        >
          <input
            type={"text"}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            name={"address"}
            // value={address}
            required
            // onChange={(event) => handleChange(name, event.target.value)}
            placeholder={"Ingresa la dirección exacta de tu tienda"}
          />
        </Autocomplete>
      )}

      {appStatus === LOCATION_FORM_STORE_STATUS.ADDRESS_INFORMATION && (
        <div className="max-w-md mx-auto mt-10">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <InputField
              id="address"
              label="Dirección"
              placeholder="Avenida República de Panamá 345"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <InputField
              id="reference"
              label="Referencia"
              placeholder="Cerca a la estación del metropolitano"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
            <InputField
              id="district"
              label="Distrito"
              placeholder="Barranco"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
            <InputField
              id="postalCode"
              label="Código postal"
              placeholder="15063"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <InputField
              id="province"
              label="Departamento/estado/provincia/región"
              placeholder="Provincia de Lima"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />
            <button className=" w-full py-1 border bg-blue-600 text-white mt-4 " onClick={handleSetAddres}>
              Continuar
            </button>
          </form>
        </div>
      )}

      {(appStatus === LOCATION_FORM_STORE_STATUS.IDLE || appStatus === LOCATION_FORM_STORE_STATUS.COORDINATES_INFORMATION) && (
        <>
         {appStatus === LOCATION_FORM_STORE_STATUS.COORDINATES_INFORMATION && (
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Arrastra el marcador para ajustar la ubicación
          </p>
         )}

          <GoogleMap
            center={center}
            zoom={(LOCATION_FORM_STORE_STATUS.IDLE === appStatus) ? 14 : 18}
            options={{...mapOptions,
                      draggable: appStatus !== LOCATION_FORM_STORE_STATUS.IDLE,
                      scrollwheel: appStatus !== LOCATION_FORM_STORE_STATUS.IDLE,}}
            mapContainerStyle={{
              width: "100%",
              height: "400px",
              borderRadius: "4px",
              // border: "1px ",
            }}
            
          >
            {LOCATION_FORM_STORE_STATUS.COORDINATES_INFORMATION === appStatus && (
              <Marker
                position={center}
                draggable
                // draggable = {LOCATION_FORM_STORE_STATUS.COORDINATES_INFORMATION === appStatus}
                onDragEnd={handleMarkerDragEnd}
              />
              
              )}
          </GoogleMap>
          <style jsx global>{`
            .gm-style .gmnoprint a,
            .gm-style .gmnoprint span,
            .gm-style .gmnoprint div {
              display: none;
            }
          `}</style>

         

        </>
      )}

      {/* <div className="flex flex-row gap-4">
        <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white ">
          {"Latitud" + center.lat}
        </label>
        <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white ">
          {"Longitud" + center.lng}
        </label>
        <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white ">
          {"Address " + address}
        </label>
        <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white ">
          {"Addr " + district}
        </label>
        <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white ">
          {"Pos " + postalCode}
        </label>
        
      </div> */}
    </div>
  );
}

export default LocationGoogleForms


