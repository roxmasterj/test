import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Vstack } from 'tamagui'
import Container from '../../components/container'
import Item from '../../components/item'
import t from '@/src/locales/i18n';

const Guest = ({ onNavigate }) => {
  return (
    <Vstack>
        <Container>
            <Item
                testID="items.contact"
                lable={t('screen.contact.title')}
                leftIcon={{name:'chatbuubles-outline', type:'ionicon'}}
                onPress={() => onNavigate('Account', { screen: 'Contact' })}
            />

            <Item
                testId="items.term"
                lable={t('screen.term.title')}
                leftIcon={{name: 'bookmark-multiple-outline', type: MaterialIcons}}
                isDivider={false}
                onPress={() => onNavigate('Account', { screen: 'Term' })}
        </Container>
    </Vstack>

  
  );
};

export default React.memo(Guest);