import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddressButton = ({ navigation }) => {
    const btnStyle = buttonStyle.solid({});

  return (
    <HStack className="w-full gap-2 rounded-lg bg-gray-100 pb-3 pl-4 pr-3 pt-4">
        <VStack className="flex-1 gap-3">
            <VStack className="flex-1">
                <Text numberOfLine={1} className="text-truncate weight-medium text-md text-gray-900">
                {t('screen.address.create_label')}
                </Text>

                <Text numberOfLine={1} className="text-sm text-gray-900">
                {t('screen.address.create_desc')}   
                </Text>
            </VStack>

            <Button
                size="sm"
                className={btnStyle.button({ class: 'self-start '})}
                onPress={() => navigation.navigate('AddressCreate ')}
            >
                <Ionicons name="add" size={12} color="white" />

                <ButtonText className={btnStyle.text({ fontSize: 'xs' })}>
                {t('screen.address.create')}
                </ButtonText>
            </Button>
        </VStack>

        <Image source={bannerImg} style={{ width: 108, height: 90 }} resizeMode="contain" />
 
    </HStack> 
  );
};

function Header ({navigation, isEmptyList = true }) {
    return (
        <VStack className="mb-3 w-full gap-6 ">
            <AddressButton navigation={navigation} />

            {!isEmptyList && (
                <Text className="weight-medium text-gray-500">{t('screen.address.list_recent')}</Text>
            )}
        </VStack>
    );
};

export default React.memo(Header);