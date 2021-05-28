import React, { useEffect, useState} from 'react'
import { View,} from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import GetLocation from 'react-native-get-location';

const Location = () => {

    const [loading, setloading] = useState(false);
    const [location, setlocation] = useState(null);
    const [latetude, setlatetude] = useState(0);
    const [longitude, setlongitude] = useState(0);

    useEffect(() => {
       
        const interval = setInterval(() => requestLocation(), 5000);
        return () => {
            clearInterval(interval);
        };
    }, [])


    const requestLocation = () => {
        setloading(true)
        setlocation(null)

        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000,

        })
            .then(location => {
                const loti = location.latitude;
                const long = location.longitude
                setloading(false)
                setlatetude(loti)
                setlongitude(long)
            })
            .catch(ex => {
                const { code, message } = ex;
                console.warn(code, message);

                setloading(false)
                setlocation(null)


            });
    }

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                region={{
                    latitude: latetude,
                    longitude: longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}>

                <Marker
                    coordinate={{ latitude: latetude, longitude: longitude }}
                    width={48}
                    height={48}
                />

            </MapView>
        </View>
    )
}

export default Location


