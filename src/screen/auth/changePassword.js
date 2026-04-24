import { useMemo } from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { VStack, HStack, Image, Text, Button, ButtonSpinner, ButtonText } from '@/src/components/core';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { containerStyle, scrollViewStyle, submitBtnStyle, registerBtnStyle, guestBtnStyle } from '@/src/styles';
import { useChangePassword } from '@/src/hooks/useChangePassword';


const ChangePasswordScreen = ({ navigation }) => {
    const insets = useSafeArea();
    const { submitting, onSubmit, t, control, formState } = useChangePassword();

    const forgetBtnStyle = useMemo(() => buttonStyle.link({}), []);
    const submitBtnStyle = useMemo(() => buttonStyle.solid({}), []);

    return (
        <VStack className={containerStyle.base({ className: 'flex-1'})}>
            <KeyboardAwareScrollView
                contentContainerClassName={scrollViewStyle({ variant: 'topCenter'})}
                keyboardShouldPersistTaps="handled"
            >
                <VStack className="w-full p-4">
                    <VStack className={containerStyle.grayBorder({ className:'w-full p-4', gap: 6 })}>
                        <Input
                            isRequired
                            name="password_current"
                            control={control}
                            formState={formState}
                            type="password"
                            keyboardType="default"
                            label={t('screen.change_password.password_current')}
                            placeholder="**********"
                        />

                        <Input 
                            isRequired
                            name="password"
                            control={control}
                            formState={formState}
                            type="password"
                            keyboardType="default"
                            label={t('screen.change_password.password')}
                            placeholder="**********"
                        />

                        <Input 
                            isRequired
                            name="password_confirmation"
                            control={control}
                            formState={formState}
                            type="password"
                            keyboardType="default"
                            label={t('forms.label.password_confirmation')}
                            placeholder="**********"
                        />

                        <Button 
                            testID="forgetPassword"
                            accessibilityLabel="forgetPassword"
                            variant="link"
                            size="lg"
                            isDisabled={submitting}
                            onPress={() => navigation.navigate('ForgetPassword')}
                            className={forgetBtnStyle.button({ className: 'self-start' })}
                        >
                            <ButtonText className={forgetBtnStyle.text({})}>
                            {t('screen.change_password.forget_password')}
                            </ButtonText>
                        </Button>
                    </VStack>
                </VStack>
            </KeyboardAwareScrollView>

            <VStack className="w-full bg-white p-4" style={{ paddingBottom: insets.bottom }}>
                <Button
                    testID="submit"
                    accessibilityLabel="submit"
                    variant="solid"
                    size="lg"
                    isDisabled={submitting}
                    onPress={onsubmit}
                    className={submitBtnStyle.button({})}
                >
                    {submitting && <ButtonSpinner />}

                    <ButtonText className={submitBtnStyle.text({})}>{t('dialog.confirm2')}</ButtonText>
                </Button>
            </VStack>
        </VStack>
    );
};

export default ChangePasswordScreen;