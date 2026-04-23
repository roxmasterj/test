import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useSafeArea } from 'react-native-safe-area-context';
import { formStyle } from '../../../styles/form';
import { containerStyle } from '../../../styles/container';
import { Input } from '../../../components/input';
import { InputSlot } from '../../../components/inputSlot';
import { InputField } from '../../../components/inputField';
import { MaterialDesignIcons } from '../../../components/materialDesignIcons';
import { colors } from '../../../styles/colors';
import { VStack } from '../../../components/vstack';
import { Ionicons } from '@expo/vector-icons';
import { t } from 'i18next';

function Header ({ submitting, onSearch }) {
    const insets = useSafeArea();
    const [text, setText] = useState('');

    const inputStyle = useMemo(()=> formStyle.input({ variant: 'unstyled' }), []);

  return (
    <VStack className="absolute left-0 right-0 top-0" style={{ paddingTop: insets.top, zIndex: 1}}>
        <VStack className={containerStyle.grayBorder({ className: 'm-3 flex-1 px-2 py-1' })}>
            <Input 
                testID="searchInput"
                accessibilityLabel="searchInput"
                variant="underlined"
                size="md"
                className={inputStyle.container({ className: 'gap-2 px-3' })}
                isDisabled={submitting}
            >
                <InputSlot>
                    <Ionicons name="search" size={22} color={colors.gray[700]} />
                </InputSlot>

                <InputField
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    placeholder={t('screen.address.search_placeholder')}
                    type="text"
                    className={inputStyle.field({})}
                    value={text}
                    onChangeText={setText}
                    onSubmitEditing={onSearch} // on Enter/Return softKeyboard <- prefer
                    // onEndEditing={() => console.log('onEndEditing)} // onClose softKeyboard, on Enter/Return softKeyboard
                />

                {!!text && (
                    <InputSlot focusable={false} onPress={() => setText('')}>
                        <MaterialDesignIcons name="close" size={22} color={colors.gray[400]} />
                    </InputSlot>
                )}
            </Input>
        </VStack>
    </VStack>
  );
};

export default React.memo(Header);