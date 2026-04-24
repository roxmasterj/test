import { useMemo } from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { useWindowDimensions } from 'react-native';
import { VStack, HStack, Image, Text, Button, ButtonSpinner, ButtonText } from '@/src/components/core';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { containerStyle, scrollViewStyle, submitBtnStyle, registerBtnStyle, guestBtnStyle } from '@/src/styles';
import { useForgetPassword } from '@/src/hooks/useForgetPassword';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/constants/colors';
import logo from '@/src/assets/images/logo.png';

const ForgetPasswordScreen = () => {
    const insets = useSafeArea();
    const {submitting, onSubmit, t, control, forState} = useForgetPassword();

    const submitBtnStyle = useMemo(() => buttonStyle.solid({}), []);

    return (
        <VStack className={containerStyle.base({ className: 'flex-1'})}>
            <KeyboardAwareScrollView
                contentContainerClassName={scrollViewStyle({ varian: 'topCenter'})}
                keyboardShouldPersistTaps="handled"
            >
                <VStack className="w=full p-4">
                    <VStack className={containerStyle.grayBorder({ className: 'w-full p-4' })}>
                        <Input 
                            isRequired
                            name="email"
                            control={control}
                            formState={formState}
                            label={t('forms.label.email')}
                            keyboardType="email-address"
                            placeholder={t('forms.placeholder.forgot_email')}
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
                    isDisabled={submitting}
                    onPress={onSubmit}
                    className={submitBtnStyle.button({ className: 'mt-2' })}
                >
                    {submitting && <ButtonSpinner />}

                    <ButtonText className={submitBtnStyle.text({})}>
                    {t('screen.forget_password.submit_btn')}
                    </ButtonText>
                </Button>
            </VStack>
        </VStack>
    );
};

export default ForgetPasswordScreen;