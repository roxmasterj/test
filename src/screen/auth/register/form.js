import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegisterFormScreen = ({ navigation }) => {
    const insets = useSafeArea();
    const {
        thaiShipping,
        province,
        amphur,
        district,
        mounting,
        submitting,
        plainSheetRef,
        onSubmit,
        getLoginData,
        t,
        control,
        formState,
    } = useRegisterForm(navigation);

    const submitBtnStyle = useMemo(() => buttonStyle.solid({}), []);
    
    if (mounting) return <Loading />;

        return (
            <VStack className={containerStyle.base({ className: 'flex-1'})}>
                <KeyboardAwareScrollView
                    contentContainerClassName={scrollViewStyle({ variant: 'topCenter'})}
                    keyboardShouldPersistTaps="handled"
                >
                    <VStack className="w-full gap-3 p-4">
                        <VStack className={containerStyle.grayBorder({ className: 'w-full p-4', gap: 5})}>
                            <Text className="weight-medium text-md text-gray-900">
                            {t('screen.register.form_section_1')}
                            </Text>

                            <VStack className="w-full gap-4">
                                <Input 
                                    isRequired
                                    name={formKeys.name}
                                    control={control}
                                    formState={formState}
                                    label={t('forms.label.name')}
                                    placeholder={t('forms.label.name')}
                                />

                                <DatePicker 
                                    name={formKeys.birthday}
                                    control={control}
                                    formState={formState}
                                    label={t('forms.label.birthday')}
                                    placeholder={t('forms.label.birthday')}
                                />

                                <Input  
                                    isRequired
                                    name={formKeys.email}
                                    control={control}
                                    formState={formState}
                                    label={t('forms.label.email')}
                                    keyboardType="email-address"
                                    placeholder={t('forms.label.email')}
                                />

                                <Input 
                                    isRequired
                                    name={formKeys.passwordConfirm}
                                    control={control}
                                    formState={formState}
                                    type="password"
                                    keyboardType="default"
                                    label={t('forms.label.password')}
                                    placeholder={t('forms.label.password')}
                                />

                                <Input 
                                    name={formKeys.remark}
                                    control={control}
                                    formState={formState}
                                    label={t('forms.label.remark')}
                                    placeholder={t('forms.placeholder.remark')}
                                />
                            </VStack>
                        </VStack>

                        <VStack className={containerStyle.grayBorder({ className: 'w-full p-4', gap: 5})}>
                            <Test className="weight-medium text-md text-gray-900">
                            {t('screen.register.form_section_2')}
                            </Test>

                            <VStack className="w-full gap-4">
                                <Input 
                                    isRequired
                                    name={formKeys.address}
                                    control={control}
                                    formState={formState}
                                    label={t('forms.label.address')}
                                    placeholder={t('forms.placeholder.address2')}
                                />

                                <HStack className="w-full gap-3">
                                    <VStack className="flex-1">
                                        <Select
                                            isRequired
                                            name={formKeys.provinceId}
                                            control={control}
                                            formState={formState}
                                            label={t('forms.label.province')}
                                            placeholder={t('forms.select.placeholder')}
                                            list={province}
                                            optionLabel= {({ title_th}) => title_th}
                                            optionValue= {({ id }) => id}
                                        />
                                    </VStack>

                                    <VStack className="flex-1">
                                        <Select 
                                            isRequired
                                            name={formKeys.amphurId}
                                            control={control}
                                            formState={formState}
                                            label={t('forms.label.amphur')}
                                            placeholder={t('forms.select.placeholder')}
                                            list={amphur}
                                            optionLabel= {({ title_th}) => title_th}
                                            optionValue= {({ id }) => id}
                                        />
                                    </VStack>
                                </HStack>

                                <HStack className="w-full gap-3">
                                    <VStack className="flex-1">
                                        <Select 
                                            isRequired
                                            name={formKeys.districtCode}
                                            control={control}
                                            formState={formState}
                                            label={t('forms.label.district')}
                                            placeholder={t('forms.select.placeholder')}
                                            list={district}
                                            optionLabel= {({ title_th}) => title_th}
                                            optionValue= {({ code }) => code}
                                        />
                                    </VStack>

                                    <VStack className="flex-1">
                                        <Input 
                                            isRequired
                                            name={formKeys.zipcode}
                                            control={control}
                                            formState={formState}
                                            keyboardType="number-pad"
                                            label={t('forms.label.zipcode')}
                                            placeholder={t('forms.label.zipcode')}

                                        />
                                    </VStack>
                                </HStack>
                            </VStack>
                        </VStack>
                        
                        <VStack className={containerStyle.grayBorder({ className: 'w-full p-4'})}>
                            <Select2
                                isRequired
                                name={formKeys.thaiShippingId}
                                control={control}
                                formState={formState}
                                label={t('forms.label.shipping_thai')}
                               placeholder={t('forms.select.placeholder')}
                               list={thaiShipping}
                               optionLabel= {({ title_th }) => title_th }
                               optionValue= {({ id }) => id}
                             />
                        </VStack>
                    </VStack>
                </KeyboardAwareScrollView>

                <VStack className="w-full bg-white p-4" style={{ paddingBottom: insets.bottom }}>
                    <Button
                        testID="submit"
                        accessibilityLabel="submit"
                        variant="solid"
                        size="ld"
                        isDisabled={onSubmit}
                        className={submitBtnStyle.button({})}
                    >
                        {submitting && <ButtonSpinner />}
                        
                        <ButtonText className={submitBtnStyle.text({})}>{t('screen.register.title')}</ButtonText>
                    </Button>
                </VStack>

                <RegisterSuccessSheet ref={plainSheetRef} getLoginData={getLoginData} />
            </VStack>
        );
    };

export default RegisterFormScreen;