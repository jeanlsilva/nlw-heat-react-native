import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ColorValue, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { COLORS } from '../../theme';

type Props = TouchableOpacityProps & {
    title: string;
    color: ColorValue,
    backgroundColor: ColorValue,
    icon?: React.ComponentProps<typeof AntDesign>['name'];
    isLoading?: boolean;
    isDisabled?: boolean;
}

export function Button({
    title, 
    color, 
    backgroundColor, 
    icon, 
    isLoading = false, 
    isDisabled,
    ...rest 
}: Props) {
  return (
    <TouchableOpacity
        style={[ styles.button, isDisabled ? { backgroundColor: COLORS.GRAY_PRIMARY } : { backgroundColor } ]}
        activeOpacity={0.7}
        disabled={isLoading}
        {...rest}
    >        
        {
            isLoading ? <ActivityIndicator color={color} /> : (
                <>
                    <AntDesign name={icon} size={24} style={styles.icon} />
                    <Text style={[styles.title, isDisabled ? { color: COLORS.BLACK_TERTIARY } : { color }]}>
                        { title }
                    </Text>
                </>
            )                                  
        }
    </TouchableOpacity>
  );
}