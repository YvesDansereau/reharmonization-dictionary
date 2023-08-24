import type { FC } from 'react';
import { Headline } from 'react-native-paper';

type DetailBaseProps = {
    headline: string;
};

const DetailBase: FC<DetailBaseProps> = props => {
    return (
        <>
            <Headline>{props.headline}</Headline>
        </>
    );
};

export const DetailSeventhToTwoFive: FC = () => {
    return (
        <DetailBase headline='test'/>
    );
};
