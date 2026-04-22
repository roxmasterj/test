import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VStack, HStack, Switch } from '../../components/core';
import PlainSheet from '../../components/plain_sheet';
import t from '@/src/locales/i18n';
import useNotifySettingForm from '../../hooks/useNotifySettingForm';

const notifySettingSheet = ({ ref, loading = true }) => {
    const onClosePress = () => ref.current?.onClose();
    const {  onSubmit, control, formState } = useNotifySettingForm({ loading, onClosePress});

  return (
    <PlainSheet
        ref={ref}
        onBtnPress={onSubmit}
        onClosePress={onClosePress}
        btnText={t('dialog.save')}
     >
        <VStack className="w-full">
            <HStack className="w-full items-center justify-center border-b-[1px] border-gray-100 p-4">
                <Text className="weight-medium text-md text-gray-700">
                    {t('screen.notification_setting.title')}
                </Text>
            </HStack>

            <VStack className="w-full gap-4 p-6">
                <VStack className="w-full rounded-lg bg-gray-50 p-4">
                    <Switch 
                        name="sms_notification"
                        control={control}
                        formState={formState}
                        label={t('forms.label.sms_notification')}
                    />
                </VStack>

                <VStack className="w-full rounded-lg bg-gray-50 p-4">
                    <Switch 
                        name="email_notification"
                        control={control}
                        formState={formState}
                        label={t('forms.label.email_notification')}
                    />
                </VStack>
            </VStack>
        </VStack>
    </PlainSheet>
  )
}

export default notifySettingSheet;