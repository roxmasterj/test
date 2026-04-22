import React from 'react'
import { useMemo } from 'react'
import { buttonStyle } from '../../styles/button'
import { VStack, HStack, Images, Text, Button, ButtonText } from '../../components/core'
import profileDefault from '../../assets/images/profile_default.png'
import { colors } from '../../theme'
import { isString } from '../../utils/string'
import { MaterialDesignIcon } from '../../components/icon'
import t from '@/src/locales/i18n';

const Profile = ({ profile = {}, onNavigate = null }) => {
    const buttonClassName = useMemo(() => buttonStyle.link({ textColor: 'gray' }), []);
  return (
    <HStack className="w-full items-center gap-3">
            <Images
            source={profile?.image_url ? { uri: profile?.image_url } : profileDefault}
            resizeMode="contain"
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                borderWidth: 2,
                borderColor: 'white',
                backgroundColor: colors.gray[100],
            }}
            />

            <VStack className="flex-1 items-start">
                <Text numberOfLines={1} className="weight-medium text-xl text-white">
                    {isString(profile?.name)}
                </Text>
                
                <Button
                    onPress={() => onNavigate('Account', { screen: 'UserProfile' })}
                    className={buttonClassName.button({})}
                >
                    <MaterialDesignIcon name="pencil-outline" size={12} color="white" />

                    <ButtonText
                    className={buttonClassName.text({
                        className: 'text-white',
                        fontSize: 'sm',
                        fontWeight: 'normal',
                    })}
                    >
                     {t('screen.account.user_profile')}
                    </ButtonText>
                </Button>
            </VStack>
        </HStack>
  )
}

export default React.memo(Profile);