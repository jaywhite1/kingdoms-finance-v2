/* eslint-disable react/jsx-filename-extension */
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { Helmet } from 'react-helmet';
// Store
import store from './redux/store';
// Styles
import './index.css';
// Components
import App from './App';

const prevTheme = window.localStorage.getItem("theme");
const subgraphUri = "http://localhost:8000/subgraphs/name/scaffold-eth/your-contract";
const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

const client = new ApolloClient({
  uri: subgraphUri,
  cache: new InMemoryCache(),
});


const theme = createTheme();

ReactDOM.render(
    <Provider store={store}>
      <ApolloProvider client={client} store={store}>
          <ThemeSwitcherProvider themeMap={themes} defaultTheme={prevTheme || "light"}>
        <Helmet>
            <title>Kingdoms Financee</title>
        </Helmet>
        <ThemeProvider theme={theme}>
            <App subgraphUri={subgraphUri} />
        </ThemeProvider>
        </ThemeSwitcherProvider>
      </ApolloProvider>,
    </Provider>,
    document.getElementById('root')
);
