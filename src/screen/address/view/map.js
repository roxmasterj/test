import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { VStack } from '../../../components/vstack';
import { HStack } from '../../../components/hstack';
import { Presable } from '../../../components/presable';
import { MaterialDesignIcon } from '../../../components/materialDesignIcon';
import { containerStyle } from '../../../styles/container';
import { colors } from '../../../styles/colors';
import { StyleSheet } from 'react-native';
import { MapView, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const Map = ({ addressId, location, navigation, t}) => {
    const isLocationValid = useMemo(() => {
        return !!location?.latitude && !!location?.longitude;
    }, [JSON.stringify(location)]);

    return (
        <VStack className={containerStyle.grayBorder({ className: 'w-full', p: 4, gap: 4})}>
            <Presable
                testID="navigation.address.map"
                accessibilityLabel="navigation.address.map"
                className="w-full"
                onPress={() => navigation.navigate('Address', { addressId, location})}
            >
                <HStack className="w-full gap-2">
                    <MaterialDesignIcon name="map-marker" size={18} color={colors.primary[500]} />

                    <VStack className="flex-1">
                        <Text numberOfLine={1} className="weight-medium shrink text-sm text-gray-900">
                        {t('screen.address.location')}
                        </Text>

                        <Text className="text-sm text-gray-500">{t('screen.address.location_pin')}</Text>
                    </VStack>

                    <MaterialDesignIcons name="chevron-right" size={20} color={colors.gray[700]} />
                </HStack>
            </Presable>

            {isLocationValid && (
                <VStack className="h-[130px] w-full overflow-hidden rounded-lg">
                    <VStack
                        className="flex-1 items-center justify-end"
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            // justifyContent: 'flex-end',
                            // alignItems: 'center',
                        }}
                        >
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ ...StyleSheet.absoluteFillObject }}
                            scrollEnabled={false}
                            region={{
                                ...location,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.015,
                            }}
                        >
                            <Marker coordinate={location} />
                        </MapView>
                    </VStack>
                </VStack>
            )}
        </VStack>
    );
};


export default React.memo(Map);