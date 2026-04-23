import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeArea } from 'react-native-safe-area-context';
import { containerStyle } from '../../../styles/container';
import { scrollViewStyle } from '../../../styles/scrollView';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { VStack } from '../../../components/vstack';
import { Input } from '../../../components/input';
import { Button } from '../../../components/button';
import { ButtonSpinner } from '../../../components/buttonSpinner';
import { ButtonText } from '../../../components/buttonText';
import { useIsFocused } from '@react-navigation/native';
import { useProfileEdit } from '../../../hooks/useProfileEdit';
import { buttonStyle } from '../../../styles/button';
import { Loading } from '../../../components/loading';

const UserProfileEditScreen = () => {
    const insets = useSafeArea();
    const isFocused = useIsFocused();
    const {
        thaiShipping,
        province,
        mounting,
        submitting,
        photoMemo,
        isBirthdayDisable,
        isOpen,
        onSubmit,
        setPhoto,
        onToggle,
        control,
        formState,
    } = useProfileEdit();

    const submitBtnStyle = useMemo(() => buttonStyle.solid({}), []);

    if (mounting) return <Loading />;

  return (
    <VStack className={containerStyle.base({ className: 'flex-1'})}>
        <KeyboardAwareScrollView
            testID="scrollView"
            accessibilityLabel="scrollView"
            contentContainerClassName={scrollViewStyle({ variant: 'topCenter'})}
            showVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="never"
        >
 
            <VStack className="w-full gap-3 p-4">
                <VStack className="w-full items-center">
                    <TouchableOpacity
                        testID="imagePicker"
                        accessibilityLabel="imagePicker"
                        activeOpacity={0.9}
                        onPress={onToggle}
                    >
                        <Image 
                            source={ photoMemo ? { uri: photoMemo } : profileDefault }
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 50,
                                borderWidth: 2,
                                borderColor: 'white',
                                alignSelf: 'center',
                            }}
                        />

                        <VStack className="absolute bottom-0 right-0 rounded-full border-[1px] border-white bg-gray-100 p-1">
                            <Ionicons name="camera-outline" size={16} color={colors.gray[400]} />
                        </VStack>
                    </TouchableOpacity>
                </VStack>

                <VStack className={containerStyle.grayBorder({ className: 'w-full', p: 4, gap: 4 })}>
                    <Input 
                        inRequired
                        isDisabled
                        name="name"
                        control={control}
                        formState={formState}
                        label={t('forms.label.name')}
                        placeholder={t('forms.label.name')}
                    />

                    <DatePicker
                        isDisabled={isBirthdayDisable}
                        name="birthday"
                        control={control}
                        formState={formState}
                        label={t('forms.label.birthday')}
                        placeholder={t('forms.label.birthday')}
                    />

                    <Input 
                        isRequired
                        isDisabled
                        name="email"
                        control={control}
                        formState={formState}
                        label={t('forms.label.email')}
                        keyboardType="email-address"
                        placeholder={t('forms.label.email')}
                    />

                    <HStack className="w-full gap-4">
                        <VStack className="flex-1">
                            <Input
                            isRequired
                            isDisabled
                            isRawInput
                            name="tel1"
                            control={control}
                            formState={formState}
                            keyboardType="number-pad"
                            label={t('screen.user_profile.tel')}
                            placeholder={t('screen.user_profile.tel')}
                             />
                        </VStack>

                        <VStack className="flex-1">
                            <Input
                                isRawInput
                                name="tel2"
                                control={control}
                                formState={formState}
                                keyboardType="number-pad"
                                label={t('screen.user_profile.tel2')}
                                placeholder={t('screen.user_profile.tel2')}
                            />
                        </VStack>
                    </HStack>
                </VStack>

                <VStack className={containerStyle.grayBorder({ classname: 'w-full', p: 4, gap: 4 })}>
                    <Switch
                        name="attach_receipts"
                        control={control}
                        formState={formState}
                        label={t('forms.label.attach_receipts')}    
                     />

                    <Select
                        isRequired
                        name="thai_shipping_method_id"
                        control={control}
                        formState={formState}
                        label={t('forms.label.shipping_thai')}
                        placeholder={t('forms.label.shipping_thai')}
                        list={thaiShipping}
                        optionLabel={({ title_th, title }) => title_th || title }
                        optionValue={({ id }) => id}
                    />

                    <Select 
                        isRequired
                        name="province"
                        control={control}
                        formState={formState}
                        label={t('forms.label.province')}
                        placeholder={t('forms.label.province')}
                        list={province}
                        optionLabel={({ title_th }) => title_th}
                        optionValue={({ id }) => id}
                    />
                </VStack>

                <VStack className={containerStyle.gray.Border({ className: 'w-full', p: 4 })}>
                    <Input 
                        name="user_remark"
                        control={control}
                        formState={formState}
                        label={t('forms.label.remark')}
                        placeholder={t('forms.placeholder.remark')}
                        // leftIcon={{ as: Ionicons, name: 'create', size: 'md' }}
                    />
                </VStack>
            </VStack>
        </KeyboardAwareScrollView>

        <VStack className="w-full bg-white p-4" style={{ paddingBottom: insets.bottom}}>
            <Button
                testID="submit"
                accessibilityLabel="submit"
                variant="solid"
                size="ig"
                className={submitBtnStyle.button({})}
                isDisabled={submitting}
                onPress={onSubmit}
            >
                {submitting && <ButtonSpinner />}

                <ButtonText className={submitBtnStyle.test({})}>{t('dialog.save')}</ButtonText>

            </Button>
        </VStack>

        <ImagePicker 
            isVisible={isOpen}
            onToggle={onToggle}
            isFocused={isFocused}
            callback={setPhoto}
        />
    </VStack>
  );
};

export default UserProfileEditScreen;