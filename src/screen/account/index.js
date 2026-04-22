import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VStack } from '../../components/core';
import Guest from './guest';
import User from './user';
import { containerStyle } from '../../styles/container';
import { APP_ENV, API_ENDPOINT } from '../../config';
import useAccountIndex from '../../hooks/useAccountIndex';
import { ScrollView } from 'react-native';

const AccountIndexScreen = () => {
    const { isGuest, profile, level, counter, loading, refreshing, onNavigate, onLogout, onRefresh } =
    useAccountIndex();

    return (
        <VStack className={containerStyle.base({ classname: 'flex-1 '})}>
            {String(APP_ENV) !== 'production' && (
                <Text className="absolute right-2 top-2 text-white opacity-30" style={{ zIndex: 99}}>
                    {`${APP_ENV} - ${API_ENDPOINT}`}
                </Text>
            )}

            <VStack
                className="absolute left-0 right-0 top-0 h-[40%] w-full bg-primary-500"
                style={{ zIndex: 0 }}
            />
            <ScrollView 
                testID="scrollView"
                accessibilityLabel="scrollView"
                contentContainerClassName={scrollViewStyle({})}
                style={{ zIndex: 1 }}
                keyboardShouldPersistTaps="handled"
                refreshControl={
                    <RefreshControl 
                    refreshing={refreshing} 
                    onRefresh={onRefresh}
                    colors={['white']} // Android
                    progressBackgroundColor={colors.primary[500]} // Android
                    tintColor="white" // iOS
                    style={{ backgroundColor: colors.primary[500]}} // iOS
                    />  
                }
            >
            <VStack className={containerStyle.base({ className: 'flex-1'})}>
                <VStack
                    className="absolute left-0 right-0 top-0 h-[150px] w-full rounded-b-3xl bg-primary-500"
                    style={{ zIndex: 2 }}
                />

                <VStack className="w-full" style={{ zIndex: 3 }}>
                    {isGuest ? (
                        <Guest onNavigate={onNavigate} />
                    ) : (
                        <User 
                            profile={profile}
                            level={level}
                            counter={counter}
                            loading={loading}
                            onNavigate={onNavigate}
                            onLogout={onLogout}
                        />
                    )}
                </VStack>
            </VStack>
        </ScrollView>
    </VStack>
  )
}

export default AccountIndexScreen;