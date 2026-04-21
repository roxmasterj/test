import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Vstack } from 'tamagui'
import Container from '../../components/container'
import Item from '../../components/item'
import t from '@/src/locales/i18n';

const Guest = ({ onNavigate }) => {
  return (
    <Vstack className='w-full p-4'>
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
        </Container>
    </Vstack>
  );
};

export default React.memo(Guest);