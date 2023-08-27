import type { FC } from 'react';
import { Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NavigationStackParamList } from '../types/NavigationStackParamList';

type DetailProps = NativeStackScreenProps<NavigationStackParamList, 'Detail'>;

export const Detail: FC<DetailProps> = props => {
    const params = props.route.params;
    return (
        <>
            <Text variant='titleLarge'>どんなもの？</Text>
            <Text variant='bodyLarge'>{params.what}</Text>

            <Text variant='titleLarge'>主にいつ使える？</Text>
            <Text variant='bodyLarge'>{params.when}</Text>

            <Text variant='titleLarge'>どうやって使う？</Text>
            <Text variant='bodyLarge'>{params.how}</Text>

            <Text variant='titleLarge'>例</Text>
            {params.examples.map((example, index) => <Text variant='bodyLarge' key={index}>{example}</Text>)}
        </>
    );
};
