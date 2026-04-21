import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import t from '@/src/locales/i18n';
import { Ionicons } from '@expo/vector-icons';
import { useRef } from 'react';


const handleMenu = ({
    onNavigate = null,
    notifySettingSheetRef = null,
    isSaleUser = false,
} = {}) => {

let manageMenu = [
    {
        testID: 'Item.notifySetting',
        label: t('screen.notification_setting.title'),
        leftIcon: {name: 'notifications-outline', type: Ionicons},
        onPress: () => notifySettingSheetRef.current?.open(),
    },
    {
        testID: 'items.address',
        label: t('screen.address.title'),
        leftIcon: {name: 'location-outline', type : Ionicons },
        isDivider: true,
        onPress:() => onNavigate('Account', { screen: 'Address' }),
    },
    {
        testID: 'items.bank',
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
];

if (isSaleUser) {
    manageMenu = managerMenu.filter(
        (item) => !['items.point_order', 'item.point'].includes(item.testID)
    );
}

  return { manageMenu };

};

function User ({profile ={}, level={}, counter={}, loading = true, onNavigate, onLogout}) {
    const notifySettingSheetRef = useRef(null);

    const isSaleUser = useMemo(
        () => profile?.admin_ref_id > 0,
        [JSON.stringify(profile.admin_ref_id)]
    );

    const { accountMenu, manaMenu } = useMemo(
        () => handleMenu({ isSaleUser, onNavigate, notifySettingSheetRef}),
        [isSaleUser, notifySettingSheetRef, onNavigate]
    );
};