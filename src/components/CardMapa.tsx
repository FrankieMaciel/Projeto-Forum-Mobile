import { View, Text, TouchableOpacity } from "react-native";
import { X } from 'react-native-feather';
import { CardStyle } from "../styles/card";
import MapView, { MapPressEvent, Marker } from "react-native-maps";
import { profileStyles } from "../styles/profile";
import { useEffect, useState } from "react";
import { LocationObject, getCurrentPositionAsync, requestForegroundPermissionsAsync } from "expo-location";
import { getForumApi } from "../utils/forumApi";
import * as UserData from "../utils/userData";

interface Props {
  closeFunc: () => void;
  closeUseState: () => boolean;
}

export function CardMapa(props: Props) {

  const [location, setLocation] = useState<LocationObject | null>(null);
  const [selectedLocalization, setSelectedLocalization] = useState<any>(null);

  const { closeFunc } = props;
  let { closeUseState } = props;

  async function getPermissionLocation() {
    const {granted} = await requestForegroundPermissionsAsync();
    if (granted) {
      const curPos = await getCurrentPositionAsync();
      setLocation(curPos);
    }    
    return;
  }

  function clickMap (e: MapPressEvent) {
    let obj = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude
    }
    setSelectedLocalization(obj);
  }

  async function saveLocalization() {
    const user = await UserData._retrieveData();
        console.log(user);
        const dataToSend = {
            userID: user.id,
            lat: selectedLocalization.latitude,
            lon: selectedLocalization.longitude,
        }

        const fetchData = async () => {
            const forumApi = await getForumApi();
            await forumApi.post(`/localizations`, dataToSend)
                .then(async response => {
                    const data = response.data;
                    console.log('Dados recebidos: ', data);
                    if (!data) {
                        let erroMessage = JSON.parse(data.error);
                        console.log();
                        console.log(erroMessage[0]);
                    };
                }).catch(error => console.error(error));
        }
        fetchData();
        closeFunc();
  }

  useEffect(() => {
    getPermissionLocation().then(() => {
      if (!location) return;
      if (!location.coords) return;
      let obj = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
      setSelectedLocalization(obj);
    })
  }, [])

  return (
    <View style={CardStyle.screenView}>
            <View style={profileStyles.mapCard}>
                <TouchableOpacity
                    style={CardStyle.fechar}
                    onPress={closeFunc}
                    disabled={!closeUseState()}
                >
                    <X
                        stroke={'#fff'}
                        fill={'#00000000'}
                    />
                </TouchableOpacity>
                <View style={profileStyles.mapView}>
                {location ? 
                  <MapView 
                  style={profileStyles.map}
                  showsUserLocation={true}
                  onPress={clickMap}
                  initialRegion={{
                    latitude: location?.coords.latitude,
                    longitude: location?.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                  }}
                  >
                    {
                      selectedLocalization ?
                      <Marker
                      identifier="origin"
                      coordinate={{
                        latitude: selectedLocalization.latitude,
                        longitude: selectedLocalization.longitude
                      }}
                      />
                    : null}
                      </MapView>
                  : null}
                </View>
                    <TouchableOpacity style={profileStyles.optionsBtn} onPress={saveLocalization}>
                        <Text style={profileStyles.btnText}>Salvar</Text>
                    </TouchableOpacity>
            </View>
        </View>
  )
}