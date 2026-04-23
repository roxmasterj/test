import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { HStack } from '../../components/hstack';
import { VStack } from '../../components/vstack';
import { Badge } from '../../components/badge';
import { BadgeText } from '../../components/badgeText';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { buttonStyle } from '../../styles/button';

const Item = ({ item, navigation }) => {
    const {id, name, status, status_text, tel, address, district, amphur, province, zipcode,} = item;

    const statusBade = useMemo(() => {
        if (status !== 'active') return null;

        return (
            <HStack className="w-full">
                <Badge variant="outline" classname="rounded-lg border-primary-500 bg-white">
                    <BadgeText className="weight-normal text-xs text-primary-600">{status_text}</BadgeText>
                </Badge>
            </HStack>
        );
    },[status]);

    const btnStyle = useMemo(() => buttonStyle.link({ textColor: 'gray' }), []);

  return (
    <HStack>
        <VStack>
            <Ionicons 
                name="location-sharp"
                size={16}
                color={status === 'active' ? colors.primary[500] : colors.gray[400] }
            />
        </VStack>

        <VStack className="flex-1 gap-1">
            <Text numberOfLines={1} className="weight-medium text-sm text-gray-900">
            {isString(name)}
            </Text>

            <Text className="text-sm text-gray-700">
                {`${address}` +
                    `ต.${isString(district?.title_th)} ` +
                    `อ.${isString(amphur?.title_th)} ` +
                    `จ.${isString(province?.title_th)} ` +
                    `${zipcode} `
                }
            </Text>

            {!!tel && (
                <Text numberOfLines={1} className="text-sm text-gray-700">
                    {tel}
                </Text>
            )}
            {statusBade}
        </VStack>

        <Pressable
            testID={`address.item.${id}`}
            accessibilityLabel={`address.item.${id}`}
            className="px-2 py-1"
            onPress={() => navigation.navigate('AddressView', item)}
        >
            <MaterialDesignIcon name="pencil" size={16} color={colors.gray[700]} />
        </Pressable>
    </HStack>
  );
};

export default React.memo(Item);