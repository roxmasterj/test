import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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

            <VStack>

            </VStack>

        </VStack>
    </PlainSheet>
  )
}
