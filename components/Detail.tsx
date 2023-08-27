import type { FC } from 'react';
import { Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NavigationStackParamList } from '../types/NavigationStackParamList';
import { StyleSheet, View } from 'react-native';

type DetailProps = NativeStackScreenProps<NavigationStackParamList, 'Detail'>;

export const Detail: FC<DetailProps> = props => {
    const params = props.route.params;
    return (
        <View style={styles.container}>
            <Text variant='titleLarge' style={[styles.title, {marginTop: 0}]}>どんなもの？</Text>
            <Text variant='bodyLarge'>{params.what}</Text>

            <Text variant='titleLarge' style={styles.title}>主にいつ使える？</Text>
            <Text variant='bodyLarge'>{params.when}</Text>

            <Text variant='titleLarge' style={styles.title}>どうやって使う？</Text>
            <Text variant='bodyLarge'>{params.how}</Text>

            <Text variant='titleLarge' style={styles.title}>例</Text>
            {params.examples.map((example, index) => <Text variant='bodyLarge' key={index}>{`\u2022 ${example}`}</Text>)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    },

    title: {
        marginTop: 20,
        marginBottom: 5,
        textDecorationLine: 'underline'
    }
})