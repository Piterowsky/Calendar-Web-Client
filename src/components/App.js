import React, { useContext } from 'react';
import { GoogleApiContext } from './GoogleApi';
import LoginScreen from './LoginScreen';
import Nav from './nav/Nav';
import { Route } from 'react-router-dom';
import CalendarsList from './calendar/CalendarsList';
import CalendarView from './calendar/CalendarView';
import styled from 'styled-components';
import {tablet} from "../utils/media";

function App() {
    const context = useContext(GoogleApiContext);
    return context.isSignedIn() ? (
        <AppContainer className="App">
            <Header>
                <Nav />
            </Header>
            <MainContainer>
                <Route component={CalendarView} exact path="/" />
                <Route component={CalendarsList} exact path="/calendars" />
            </MainContainer>
        </AppContainer>
    ) : (
        <LoginScreen />
    );
}

const Header = styled.header`
    margin-bottom: 1%;
    height: 5%;

    @media (${tablet}) {
        height: 8%;
    }
`;

const MainContainer = styled.main`
    padding: 0 2%;
    height: 95%;
    
    @media (${tablet}) {
        height: 92%;
    }
`;

const AppContainer = styled.div`
    overflow: hidden;
    height: 100vh;
`;

export default App;
