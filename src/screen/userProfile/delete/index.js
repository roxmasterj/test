import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { useSafeArea } from 'react-native-safe-area-context';
import { containerStyle } from '../../../styles/container';
import { scrollViewStyle } from '../../../styles/scrollView';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { VStack } from '../../../components/vstack';
import { Input } from '../../../components/input';
import { Button } from '../../../components/button';
import { ButtonSpinner } from '../../../components/buttonSpinner';
import { ButtonText } from '../../../components/buttonText';

const UserProfileDeleteScreen = () => {
    const insets = useSafeArea();
    const { submitting, onSubmit, control, formState } = useUserProfileDelete();

    const submitBtnStyle = useMemo(() => buttonStyle.solid({}), []);

  return (
    <VStack className={containerStyle.base({ className: 'flex-1' })}>
        <KeyboardAwareScrollView
            contentContainerClassName={scrollViewStyle({ variant: 'topCenter'})}
            keyboardShouldPersistTaps="handled"
        >
            <VStack className="w-full gap-4 px-4 pb-4 pt-6">
                <Text className="text-xl text-gray-900">
                    <Ionicons name="person-outline" size={24} color="gray-900" />
                    {` ${t('screen.user_profile.delete_text1')}`}
                </Text>

                <Text className="text-sm text-gray-700">
                    {t('screen.user_profile.delete_text2')}
                    {t('screen.user_profile.delete_text3')}
                    {t('screen.user_profile.delete_text4')}
                </Text>

                <VStack className={containerStyle.grayBorder({ className: 'w-full gap-4 px-3 py-5' })}>
                    <Text className="weight-medium text-sm text-gray-900">
                    {t('screen.user_profile.delete_text5')}
                    </Text>

                    <Input 
                        isRequired
                        name="password"
                        control={control}
                        formState={formState}
                        type="password"
                        keyboardType="default"
                        placeholder={t('forms.label.password')}
                        size="md"
                        inputStyle="text-md"
                    />
                </VStack>
            </VStack>
        </KeyboardAwareScrollView>

        <VStack className="w-full bg-white p-3" style={{ paddingBottom: insets.bottom }}>
            <Button
                variant="solid"
                size="lg"
                className={submitBtnStyle.button({})}
                isDisabled={submitting}
                onPress={onSubmit}
            >
                {submitting && <ButtonSpinner />}

                <ButtonText className={submitBtnStyle.text({})}>
                {t('screen.user_profile.delete_title')}
                </ButtonText>
            </Button>
        </VStack>
    </VStack>
  );
};

export default UserProfileDeleteScreen;