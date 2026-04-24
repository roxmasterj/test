import { useMemo } from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { useWindowDimensions } from 'react-native';
import { VStack, HStack, Image, Text, Button, ButtonSpinner, ButtonText } from '@/src/components/core';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { containerStyle, scrollViewStyle, submitBtnStyle, registerBtnStyle, guestBtnStyle } from '@/src/styles';
import { useLogin } from '@/src/hooks/useLogin';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/constants/colors';
import logo from '@/src/assets/images/logo.png';

const LoginScreen = ({ navigation }) => {
    const insets = useSafeArea();
    const layout = useWindowDimensions();
    const { submitting, onSubmit, guest, t, control, formState } = useLogin();

    const forgetBtnStyle = useMemo(() => buttonStyle.link({}), []);
    const submitBtnStyle = useMemo(() => buttonStyle.solid({}), []);
    const registerBtnStyle = useMemo(() => buttonStyle.link({}), []);
    const guestBtnStyle = useMemo(() => buttonStyle.solid({}), []);

    return (
        <VStack>
            <Image 
                source={logo}
                style={{
                    width: 120,
                    height: 120,
                    alignSelf: 'center',
                    position: 'absolute',
                    top: layout.height * 0.2 -60,
                    zIndex: 2,
                    backgroundColor: 'white',
                    borderRadius: 60,
                }}
                resizeMode="contain"
            />

            <VStack
                className="h-[80%] w-full overflow-hidden rounded-t-3xl gb-white"
                style={{
                    paddingBottom: insets.bottom,
                    top: layout.height * 0.2,
                    zIndex: 1,
                }}
            >
                <KeyboardAwareScrollView
                    contentContainerClassName={scrollViewStyle({ variant: 'topCenter'})}
                    KeyboardShouldPersistTaps="handled"
                >
                    <VStack className="w-full items-center gap-2 px-6" style={{ paddingTop: 70 }}>
                        <VStack className="mt-2 w-full items-center">
                            <Text className="weight-semibold text-xl text-gray-900">
                            {t('screen.login.welcome_title', { app_title: t('app_title') })}
                            </Text>

                            <Text className="text-md-text-gray-900">{t('screen.login.welcome_desc')}</Text>
                        </VStack>

                            <VStack className="mt-4 full gap-2">
                                <VStack className="w-full gap-6">
                                    <Input
                                        isRequired
                                        name="email"
                                        control={control}
                                        formState={formState}
                                        keyboardType="email-address"
                                        label={t('forms.label.email')}
                                        placeholder={t('forms.label.email')}
                                        size="lg"
                                        inputStyle="text-md"
                                    />

                                    <Input 
                                        isRequired
                                        name="password"
                                        control={control}
                                        formState={formState}
                                        type="password"
                                        keyboardType="default"
                                        label={t('forms.label.password')}
                                        placeholder={t('forms.label.password')}
                                        size="lg"
                                        inputStyle="text-md"
                                    />

                                    <Button
                                        textID="forget_password"
                                        accessibilityLabel="forgetPassword"
                                        variant="link"
                                        size="lg"
                                        isDisabled={submitting}
                                        onPress={() => navigation.navigate('ForgetPassword')}
                                        className={forgetBtnStyle.button({ className: 'mt-4 self-end'})}
                                    >
                                        <ButtonText className={forgetBtnStyle.text({})}>
                                        {t('screen.login.forget_password')}
                                        </ButtonText>
                                    </Button>
                                </VStack>

                                <VStack className="w-full gap-4">
                                    <Button
                                        testID="submit"
                                        accessibilityLabel="submit"
                                        variant="solid"
                                        size="lg"
                                        isDisabled={submitting}
                                        onPress={onSubmit}
                                        className={submitBtnStyle.button({ className: 'mt-6' })}
                                    >
                                        {submitting && <ButtonSpinner />}

                                        <ButtonText className={submitBtnStyle.text({})}>
                                        {t('screen.login.submit_btn')}
                                        </ButtonText>
                                    </Button>

                                    <Button
                                        testID="guest"
                                        accessibilityLabel="guest"
                                        variant="solid"
                                        size="lg"
                                        isDisabled={submitting}
                                        onPress={guest}
                                        className={guestBtnStyle.button({ class: 'gap-2'})}
                                    >
                                        <Ionicons name="person-outline" size={18} color={colors.primary[700]} />

                                        <ButtonText className={guestBtnStyle.text({
                                            className: 'text-gray-700',
                                            fontSize: 'sm',
                                            fontWeight: 'normal',
                                        })}
                                        >
                                        {t('screen.login.guest')}
                                    </ButtonText>
                                </Button>
                            </VStack>
                        </VStack>   
                    </VStack>
                </KeyboardAwareScrollView>

                <VStack className="mb-2 w-full items-center">
                    <HStack className="mt-2 w-full items-center justify-center gap-2">
                        <Text className="text-md text-gray-500">{t('screen.login.register_text')}</Text>

                        <Button
                            testID="register"
                            accessibilityLabel="register"
                            variant="link"
                            size="lg"
                            isDisabled={submitting}
                            onPress={() => navigation.navigate('Register')}
                            className={registerBtnStyle.button({})}
                        >

                        <ButtonText className={registerBtnStyle.text({})}>
                        {t('screen.login.register_btn')}
                        </ButtonText>
                        </Button>
                    </HStack>
                </VStack>
            </VStack>
        </VStack>
    );
};

export default LoginScreen;