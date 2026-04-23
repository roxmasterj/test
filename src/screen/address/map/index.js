import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VStack } from '../../../components/vstack';
import { MapView, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useAddressMap } from '../../../hooks/useAddressMap';
import { Header } from './header';
import { Footer } from './footer';

const AddressMapScreen = ({ route: { params } }) => {
    const {
        submitting,
        location,
        marker,
        onSubmit,
        onSearch,
        onMoveMap,
        onMoveMarker,
        setCurrentLocation,
        
    } = useAddressMap(params);

  return (
    <VStack className="flex-1 bg-white">
        <VStack
            className="flex-1 items-center justify-end"
            style={{ ...StyleSheet.absoluteFillObject, zIndex: 0 }}
        >
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ ...StyleSheet.absoluteFillObject}}
                region={location}
                onPress={onMoveMarker}
                onRegionChangeComplete={(region, isGesture) => onMoveMap(region, isGesture)}
            >
                <Marker draggable coordinate={marker} onDragEnd={onSearch} />
            </MapView>
        </VStack>

        <Header submitting={submitting} onSearch={onSearch} />

        <Footer submitting={submitting} setCurrentLocation={setCurrentLocation} onSubmit={onSubmit} />
    </VStack>
  );
};

export default AddressMapScreen;