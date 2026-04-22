import { StyleSheet, Text, View } from 'react-native'
import React from 'react'     
import t from '@/src/locales/i18n';
import { VStack, Container, Item } from '../../components/core';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Item } from '@/src/components/account';

const Guest = ({ onNavigate }) => {
  return (
    <VStack className='w-full p-4'>
        <Container>
            <Item
                testID="items.contact"
                label={t('screen.contact.title')}
                leftIcon={{name:'chatbubbles-outline', type: Ionicons}}
                onPress={() => onNavigate('Account', { screen: 'Contact' })}
            />

            <Item
                testID="items.term"
                label={t('screen.term.title')}
                leftIcon={{name: 'bookmark-multiple-outline', type: MaterialIcons}}
                isDivider={false}
                onPress={() => onNavigate('Account', { screen: 'Term' })}
            />
        </Container>
    </VStack>
  );
};

export default React.memo(Guest);