import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddressViewScreen = ({ navigation, route: { params } }) => {
  const insets = useSafeArea();
  const {
    province,
    amphur,
    district,
    loading,
    submitting,
    location,
    isMapAvailable,
    onSubmit,
    t,
    control,
    formState,
  } = useAddressView(params);

    const submitBtnStyle = useMemo(() => buttonStyle.solid({}), []);

    if (loading) return <Loading />;

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
                  <VStack className={containerStyle.grayBorder({ className: 'w-full', p: 4, gap: 5})}>
                    <Text className="weight-medium text-sm text-gray-900">
                    {t('screen.address.create_info')}
                    </Text>

                    <VStack className="w-full gap-4">
                        <Input 
                            isRequired
                            name={formKeys.name}
                            control={control}
                            formState={formState}
                            label={t('screen.address.name')}
                            placeholder={t('screen.address.name')}
                        />

                        <Input 
                            isRawInput
                            name={formKeys.tel}
                            control={control}
                            formState={formState}
                            keyboardType="number-pad"
                            label={t('screen.address.tel')}
                            placeholder={t('screen.address.tel')}
                        />

                        <Switch 
                            name={formKeys.status}
                            control={control}
                            formState={formState}
                            label={t('forms.label.status')}
                        />
                    </VStack>
                </VStack>

                <VStack className={containerStyle.grayBorder({ className: 'w-full', p: 4, gap: 5 })}>
                    <Text className="weight-medium text-sm text-gray-900">
                    {t('screen.address.create_address_info')}
                    </Text>

                    <VStack className="w-full gap-4">
                        <Input 
                        isRequired
                        name={formKeys.address}
                        control={control}
                        formState={formState}
                        label={t('forms.label.address')}
                        placeholder={t('forms.placeholder.address')}
                        />

                        <HStack className="w-full gap-3">
                            <VStack className="flex-1">
                                <Select
                                    isRequired
                                    name={formKeys.province}
                                    control={control}
                                    formState={formState}
                                    label={t('forms.label.province')}
                                    placeholder={t('forms.select.placeholder')}
                                    list={province}
                                    optionLabel={({ title_th}) => title_th}
                                    optionValue={({ id }) => id}
                                />
                            </VStack>

                            <VStack className="flex-1">
                                <Select 
                                    isRequired
                                    name={formKeys.amphur}
                                    control={control}
                                    formState={formState}
                                    label={t('forms.label.amphur')}
                                    placeholder={t('forms.select.placeholder')}
                                    list={amphur}
                                    optionLabel={({ title_th }) => title_th }
                                    optionValue={({ id }) => id }
                                />
                            </VStack>
                        </HStack>

                        <HStack className="w-full gap-3">
                            <VStack className="flex-1">
                                <Select 
                                    isRequired
                                    name={formKeys.district}
                                    control={control}
                                    formState={formState}
                                    label={t('forms.label.district')}
                                    placeholder={t('forms.select.placeholder')}
                                    list={district}
                                    optionLabel={({ title_th }) => title_th }
                                    optionValue={({ code }) => code }
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

                {!!isMapAvailable && (
                    <Map address={params?.id} location={location} navigation={navigation} t={t} />
                )}

                <VStack className={containerStyle.grayBorder({ className: 'w-full', p: 4 })}>
                    <Input 
                        name={formKeys.remark}
                        control={control}
                        formState={formState}
                        label={t('forms.label.remark')}
                        placeholder={t('forms.placeholder.remark')}
                    />
                </VStack>
            </VStack>
        </KeyboardAwareScrollView>

        <VStack className="w-full bg-white p-4" style={{ paddingBottom: insets.bottom }}>
            <Button
                testID="submit"
                accessibilityLabel="submit"
                variant="solid"
                size="lg"
                className={submitBtnStyle.button({})}
                isDisabled={submitting}
                onPress={onsubmit}
                >   
                    {submitting && <ButtonSpiner />}

                    <ButtonText className={submitBtnStyle.text({})}>{t('dialog.save')}</ButtonText>
            </Button>
        </VStack>
      </VStack>
    )
};

export default AddressViewScreen;