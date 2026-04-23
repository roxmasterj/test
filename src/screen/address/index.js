import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeArea } from 'react-native-safe-area-context';
import { useAddress } from '../../hooks/useAddress';
import { containerStyle } from '../../styles/container';
import { virtualizedStyle } from '../../styles/virtualized';
import { FlatList } from 'react-native';
import { RefreshControl } from 'react-native';
import { Spinner } from '../../components/spinner';
import { VStack } from '../../components/vstack';
import { Header } from './header';
import { isEmpty } from 'lodash';
import { Item } from './item';

const AddressScreen = ({ navigation }) => {
    const insets = useSafeArea();
    const { data, refresh, fetch, onRefresh, onFetch } = useAddress();

    return (
        <VStack className={containerStyle.base({ className: 'flex-1' })}>
            <FlatList 
                textID={`address.FlatList`}
                accessibilityLabel={`address.FlatList`}
                contentContainerClassName={virtualizedStyle({})}
                contentContainerStyle={{ paddingButtom: insets.bottom }}
                data={data}
                renderItem={({item }) => <Item item={item} navigation={navigation} />}
                removeClippedSubViews={true}
                showsVerticalScrollIndication={false}
                keyExtractor={(_, index) => index.toString}
                refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
                onEndReached={onFetch}
                ListFooterComponent={<Spinner isLoading={fetch} />}
                ItemSeparatorComponent={() => <VStack className="w-full p-[6px]" />}
                ListHeaderComponent={<Header navigation={navigation} isEmptyList={isEmpty(data)} />}
            />
        </VStack>
  );
};

export default AddressScreen;
