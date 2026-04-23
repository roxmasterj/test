import { MaterialDesignIcons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { VStack } from '../../components/vstack';
import { ScrollView } from 'react-native';
import { Image } from '../../components/image';
import { Text } from '../../components/text';
import { Container } from '../../components/container';
import { Item } from '../../components/item';
import { useSafeArea } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import t from '../../locales/i18n';

const handleMenu = ({ navigation }) => [
    {
        testID: 'item.profile',
        label: t('screen.user_profile.edit_btn'),
        leftIcon: { name: 'pencil', type: MaterialDesignIcons, size: 20, color: colors.gray[700] },
        isDivider: true,
        onPress: () => navigation.navigate('UserProfile'),
    },
    {
        testID: 'item.tax',
        label: t('screen.tax.title'),
        leftIcon: {
            name: 'account-tag',
            type: MaterialDesignIcons,
            size: 20,
            color: colors.gray[700],
        },
        isDivider: true,
        onPress: () => navigation.navigate('Tax'),
    },
    {
        testID: 'item.changePassword',
        label: t('screen.change_password.title'),
        leftIcon: { name: 'lock', type: MaterialDesignIcons, size:20, color: colors.gray[700] },
        isDivider: true,
        onPress: () => navigation.navigate('ChangePassword'),
    },
    {
        testID: 'item.delete',
        label: t('screen.user_profile.delete_btn'),
        leftIcon: {
            name: 'trash-can',
            type: MaterialDesignIcons,
            size: 20,
            color: colors.primary[500],
        },

        isDivider: false,
        textClassName: 'text-primary-500',
        onPress: () => navigation.navigate('UserProfileDelete'),
    },
];

const UserProfileScreen = ({ navigation }) => {
    const navigation = useSafeArea();
    const { profile } = useSelector(({ Auth }) => Auth);

    const menu = useMemo(() => handleMenu({ navigation }), [navigation]);

    return (
        <VStack className={containerStyle.base({ className: 'flex-1'})}>
            <ScrollView
                testID="scrollView"
                accessibilityLabel="scrollView"
                contentContainerClassName={scrollViewStyle({ variant: 'topCenter' })}
                keyboardShouldPersistTaps="handled"
            >
                <VStack className="w-full gap-4 p-4" style={{ paddingBottom: insets.bottom}}>
                    <Image
                        source={profile?.image_url ? { uri: profile?.image_url} : profileDefault}
                        resizeMode="contain"
                        style={{
                            width:100,
                            height:130,
                            borderRadius: 100,
                            borderWidth: 3,
                            borderColor: 'white',
                            backgroundColor: colors.gray[100],
                            alignSelf: 'center',
                            marginTop: 15,
                        }}
                    />

                    <VStack className='w-full items-center'>
                        <Text numberOfLines={2} className="weight-medium text-center text-md text-gray-900">
                        {profile?.name}
                        </Text>
                        <Text numberOfLines={2} className="weight-medium text-center text-sm text-gray-400">
                        {profile?.email}
                        </Text>
                    </VStack>

                    <Container className="mt-2">
                        {menu.map((menu, index)=> (
                            <Item
                                key={index}
                                testID={menu.testID}
                                label={menu.label}
                                leftIcon={menu.leftIcon}
                                textClassName={menu.testClassName || ''}
                                onPress={menu.onPress}
                                isDivider={menu.isDivider}
                            />
                        ))}
                    </Container>
                </VStack>
            </ScrollView>
        </VStack>
    );
};

export default UserProfileScreen;