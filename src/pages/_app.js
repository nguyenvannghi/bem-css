import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import { wrapperStore } from 'redux/store';
import LoadingApp from 'components/_base/loadingApp';
import { loadingOpen, loadingClose } from 'components/_base/loadingApp/action';
import { ToastContainer } from 'components/_base/toastBox';
import { appWithTranslation } from 'utils/i18n';
import Header from 'components/_base/header';
import 'assets/index.scss';
import 'assets/example/example.scss';

const theme = {};

function App({ Component, pageProps }) {
    const [isLoading, setLoading] = useState(null);

    const dispatch = useDispatch();

    Router.events.on('routeChangeStart', () => {
        setLoading(true);
    });
    Router.events.on(['routeChangeComplete'], () => {
        setLoading(false);
    });
    Router.events.on('routeChangeError', () => {
        setLoading(false);
    });

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    useEffect(() => {
        isLoading ? dispatch(loadingOpen()) : dispatch(loadingClose());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    return (
        <ThemeProvider theme={theme}>
            <div className="container">
                <Header />
                <Component {...pageProps} />
                <LoadingApp />
                <ToastContainer />
            </div>
        </ThemeProvider>
    );
}

App.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.object,
};

export default wrapperStore.withRedux(appWithTranslation(App));
