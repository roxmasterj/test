import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useMemo } from 'react';
import { VStack, HStack, Text, Progress, ProgressFilledTrack } from '../../components/core';
import Container from '../../components/container';
import { format } from '../../utils/format';
import t from '@/src/locales/i18n';

function Credit({ level = {} }) {
    const isExpireDare = useMemo (
        () => 
            !!level?.user_level?.expire_at &&
            ['dynamic', 'temporary', 'vip'].includes(level?.level_tier?.type),
            [level?.user_level?.expired_at, level?.level_tier?.type]
        );
    const isProgress = useMemo (
        () => ['dynamic', 'progressive'].includes(level?.level_tier?.type),
        [level?.level_tier?.type]
        );
    const progressValue = useMemo (
        () => {
        if (!isProgress) return 0;
        const progress = level?.user_level?.accumulated_total / level?.level_tier?.threshold_points_max;
        return Math.round(Number(progress) * 100);    
        }, [isProgress, level?.user_level?.accumulated_total, level?.level_tier?.threshold_points_max]);

    return (
        <Container>
            {isProgress && (
                <VStack className="w-full gap-2">
                    <Test numberOfLines={1} className="text-sm text-gray-700">
                        {t('screen.account.accumulate_shipping')}
                    </Test>

                    <Progress value={progressValue} className="h-2 w-full" size="sm" >
                        <ProgressFilledTrack className="bg-primary-500" />
                    </Progress>

                    {!!level?.level_tier?.threshold_points_max && (
                        <Text numberOfLines={1} className="weight-medium self-end text-sm text-gray-700">
                            {t('screen.account.next_level')}

                            <Text className="text-primary-500">
                                {format.integer(level?.user_level?.accumulated_total || 0)}
                            </Text>

                            {`/${format.integer(level?.level_tier?.threshold_points_max)}`}
                        </Text>
                    )}
                </VStack>
            )}
        </Container>
    );
};

export default Credit;