import React, { useEffect, Component } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { rootInit } from 'src/ducks/root/actions';


export const Root = () => {
    const { loading, data } = useSelector(state => state.root);
    const put = useDispatch();
    console.log('render');

    // useEffect(() => {
    //     put(rootInit());
    // }, []);

    if (loading) {
        return (
            <div>
                Загрузка
            </div>
        );
    }

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}