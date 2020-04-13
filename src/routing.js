import React from 'react';
import { Root } from 'src/pages/root';
import { rootInit } from 'src/ducks/root/actions';
import { pageWrap } from 'src/utils/page-wrap';

export const config = [
    {
        path: '/',
        key: 'main',
        exact: true,
        render: () => <Root />,
        init: rootInit
    },
    {
        path: '*',
        key: 'not-found',
        exact: true,
        render: () => (
            <div>
                not found
            </div>
        )
    },
];
