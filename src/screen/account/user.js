import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import t from '@/src/locales/i18n';
import { Ionicons } from '@expo/vector-icons';
import { useRef, useMemo } from 'react';
import Profile from './profile';
import { VStack, HStack } from '../../components/core';
import Container from '../../components/container';
import Item from '../../components/item';
import NotifySettingSheet from './notify_setting_sheet';

const handleMenu = ({
    onNavigate = null,
    notifySettingSheetRef = null,
    isSaleUser = false,
} = {}) => {
const accountMenus = [
    {
        testID: 'item.tax',
        label: t('screen.tax.title'),
        leftIcon: { name: 'person-outline', type: Ionicons },
        isDivider: true,
        onPress:() => onNavigate('Account', { screen: 'Tax' }),
    },
    {
        testID: 'item.changePassword',
        label: t('screen.change_password.title'),
        leftIcon: { name: 'lock-closed-outline', type: Ionicons },
        isDivider: true,
        onPress: () => onNavigate('Account', { screen: 'ChangePassword' }),
    },
    {
        testID: 'item.notificationSetting',
        label: t('screen.notification_setting.title'),
        leftIcon: { name: 'notification-outline', type: Ionicons },            
        isDivider: false,
        onPress: () => notifySettingSheetRef.current?.onOpen(),
    },
];

let manageMenu = [
    {
        testID: 'item.notifySetting',
        label: t('screen.notification_setting.title'),
        leftIcon: { name: 'notifications-outline', type: Ionicons },
        isDivider: true,
        onPress: () => notifySettingSheetRef.current?.onOpen(),
    },
    {
        testID: 'item.address',
        label: t('screen.address.title'),
        leftIcon: {name: 'location-outline', type : Ionicons },
        isDivider: true,
        onPress:() => onNavigate('Account', { screen: 'Address' }),
    },
    {
        testID: 'item.user_bank',
        label: t('screen.bank.title'),
        leftIcon: { name: 'person-outline', type: Ionicons},
        isDivider: true,
        onPress:() => onNavigate('Account', { screen: 'UserBank' }),
    },
    {
        testID: 'items.bank_payment',
        label: t('screen.bank_payment.title'),
        leftIcon: { name: 'reader-outline', type: Ionicons},
        isDivider: true,
        onPress:() => onNavigate('Account', { screen: 'BankPayment' }),
    },
    {
        testID: 'items.expense_refund',
        label: t('screen.expense_refund.title'),
        leftIcon: { name: 'reader-outline', type: Ionicons},
        isDivider: true,
        onPress:() => onNavigate('Account', { screen: 'ExpenseRefund' }),

    },
    {
        testID: 'items.coupon_buyer',
        label: t('screen.coupon_buyer.title'),
        leftIcon: { name: 'ticket-outline', type: Ionicons},
        isDivider: true,
        onPress:() => onNavigate('Account', { Screen: 'CouponBuyer' }),
    },
    {
        testID: 'items.point_order',
        label: t('screen.point_order.title'),
        leftIcon: { name: 'gift-outline', type: Ionicons},
        isDivider: true,
        onPress:() => onNavigate('Account', { Screen: 'PointOrder'}),
    },
    {
        testID: 'item.point',
        label: t('screen.point.title'),
        leftIcon: { name: 'gift-outline', type: Ionicons},
        isDivider: true,
        onPress:() => onNavigate('Account', { Screen: 'Point'}),
    },
    {
        testID: 'items.line_notify',
        label: t('screen.line_notify.title'),
        leftIcon: { name: 'notifications-outline', type: Ionicons},
        isDivider: true,
        onPress:() => onNavigate('Account', { Screen: 'LineNotification'}),
    },
    {
        testID: 'item.calculate',
        label: t('screen.calculate.title'),
        leftIcon: ( 'screen.calculate.title' ),
        isDivider: false,
        onPress: () => onNavigate('Account', { screen: 'Calculate' }),
    },
];

if (isSaleUser) {
    manageMenu = manageMenu.filter(
        (item) => !['items.point_order', 'item.point'].includes(item.testID)
    );
}

  return { accountMenus, manageMenu };
};

function User ({ profile ={}, level={}, counter={}, loading = true, onNavigate, onLogout }) {
    const notifySettingSheetRef = useRef(null);

    const isSaleUser = useMemo(
        () => profile?.admin_ref_id > 0,
        [JSON.stringify(profile.admin_ref_id)]
    );

    const { accountMenu, manageMenu } = useMemo(
        () => handleMenu({ isSaleUser, onNavigate, notifySettingSheetRef}),
        [isSaleUser, notifySettingSheetRef, onNavigate]
    );

    return ( 
        <VStack className="w-full gap-3 p-4">
            <Profile profile={profile} level={level} onNavigate={onNavigate} />

            {!isSaleUser && <Credit level={level} />}

            {/* Order Info */}
            <Container>
                <VStack className="mb-3 w-full gap-3">
                    <Text className="weight-medium text-sm text-gray-900">
                       {t('screen.account.order_list')}
                    </Text>
                </VStack>

                <HStack>
                    <OrderItem 
                        testID="item.basket"
                        count={counter?.basket || 0}
                        label={t('screen.account.favorite')}
                        onPress={() => onNavigate('Home', { screen: 'Basket' })}
                    />

                    <Divider orientation="vertical" className="-mx-[1px] bg-gray-300" />

                    <OrderItem 
                        testID="item.order"
                        count={counter?.bill || 0}
                        label={t('screen.account.order')}
                        onPress={() => onNavigate('Home', { screen: 'Order' })}
                    />
                </HStack>
            </Container>

            <Container>
                {accountMenu.map((menu, index) => (
                    <Item
                        key={index}
                        testID={menu.testID}
                        label={menu.label}
                        leftIcon={menu.leftIcon}
                        onPress={menu.onPress}
                        isDivider={menu.isDivider}
                    />
                ))}
            </Container>

            {/* ETC */}
            <Container>
                <Item
                    testID="items.contact"
                    label={t('screen.contact.title')}
                    leftIcon={{name: 'chatbubbles-outline', type: Ionicons}}
                    onPress={() => onNavigate('Account', { screen: 'Contact' })}
                />

                <Item 
                    testID="item,term"
                    label={t('screen.term.title')}
                    leftIcon={{ name: 'bookmark-multiple-outline', type: MaterialDesignIcon}}
                    isDivider={false}
                    onPress={() => onNavigate('Account', { screen: 'Term' })}
                />
            </Container>

            {/* Logout */}
            <Container>
                <Item 
                     testID="item.logout"
                     label={t('screen.logout.title')}
                     leftIcon={{ name: 'log-out-outline', type: Ionicons}}
                     isDivider={false}
                     onPress={onLogout}
                />
            </Container>

                <NotifySettingSheet ref={notifySettingSheetRef} loading={loading} />
            </VStack>
    );
};

export default React.memo(User);