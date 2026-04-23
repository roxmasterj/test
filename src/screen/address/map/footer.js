import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Footer ({ submitting, setCurrentLocation, onSubmit}) {
    const insets = useSafeArea();

    const submitBtnStyle = useMemo(() => buttonStyle.solid({}));
    const setCurrentLocationBtnStyle = useMemo(() => buttonstyle.link({}), []);

  return (
    <VStack
        className="w-full bottom-0 left-0 right-0 overflow-hidden rounded-t-lg bg-white"
        style={{ paddingBottom: insets.bottom, zIndex: 1 }}
    >
        <VStack className="w-full gap-4 px-3 pb-1 pt-3">
            <Button
                testID="currentLocation"
                accessibilityLabel="currentLocation"
                variant="link"
                size="lg"
                className={setCurrentLocationBtnStyle.button({ className: 'gap-2' })}
                isDisabled={submitting}
                onPress={setCurrentLocation}
            >
                <Ionicons name="locate" size={16} color={colors.primary[500]} />

                <ButtonText className={currentLocationBtnTextStyle.text({})}>
                {t('screen.address.location_pin')}  
                </ButtonText>
            </Button>

            <Button
                textID="submit"
                accessibilityLabel="submit"
                variant="solid"
                size="lg"
                className={submitBtnStyle.button({})}
                isDisabled={submitting}
            >
                {submitting && <ButtonSpinner />}
                <ButtonText className={submitBtnStyle.text({})}>{t('dialog.confirm2')}</ButtonText>
            </Button>
        </VStack>
    </VStack>
  );
};

export default React.memo(Footer);