import React, { useState, useEffect } from "react";
import {
    GoogleMap,
    Marker,
    Circle,
    useLoadScript,
} from "@react-google-maps/api";

export const ExploreMap = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "", // Reemplaza esto con tu clave de API de Google Maps
    });

    const [center, setCenter] = useState({
        lat: -12.149483334902332,
        lng: -77.02107489109041,
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCenter({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                () => {
                    console.error("Error getting the user's location");
                }
            );
        }
    }, []);

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

    if (!isLoaded) return <div className="h-full w-full"></div>;

    return (
        <div className="w-full h-full">
            <GoogleMap
                center={center}
                zoom={16}
                options={mapOptions}
                // showsPointsOfInterest={false}
                mapContainerStyle={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "4px",
                    // border: "1px solid black",
                }}
            >
                {/* Puedes agregar otros componentes de Google Maps aquí, como <Marker> */}
                {center && (
                    <>
                        {/* <Marker position={center} /> */}
                        <Circle
                            center={center}
                            radius={20} // Adjust radius as needed
                            options={{
                                strokeColor: "#4285F4",
                                strokeOpacity: 0.8,
                                strokeWeight: 2,
                                fillColor: "#4285F4",
                                fillOpacity: 0.35,
                            }}
                        />
                    </>
                )}
            </GoogleMap>
            <style jsx global>{`
                .gm-style .gmnoprint a,
                .gm-style .gmnoprint span,
                .gm-style .gmnoprint div {
                    display: none;
                }
            `}</style>
        </div>
    );
};
