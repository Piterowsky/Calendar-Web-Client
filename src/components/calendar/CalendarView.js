import React from 'react';
import MonthView from './MonthView';
import DetailsView from '../event/DetailsView';
import styled from 'styled-components';
import colors from '../../utils/colors';
import { RoundedButton } from '../uni/Buttons';

class CalendarView extends React.Component {
    viewModes = {
        day: 'DAY',
        month: 'MONTH',
        year: 'YEAR',
    };

    state = {
        viewMode: this.viewModes.month,
        current: {
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
        },
    };

    setCurrentDay = (year, month, day) => {
        const current = {
            year,
            month,
            day,
        };
        this.setState({ current });
    };

    render() {
        const current = this.state.current;

        return (
            <Container>
                <MonthView date={current} setCurrentDay={this.setCurrentDay} />
                <DetailsView date={current} />
                <TodayButton setCurrentDay={this.setCurrentDay} />
            </Container>
        );
    }
}

function TodayButton({ setCurrentDay }) {
    const today = new Date();
    const handleClick = () => setCurrentDay(today.getFullYear(), today.getMonth(), today.getDate());
    return (
        <StyledTodayButton onClick={handleClick}>
            <div>Today</div>
        </StyledTodayButton>
    );
}

const StyledTodayButton = styled.button`
    border-radius: 50%;
    background: transparent;
    position: absolute;
    height: 50px;
    width: 50px;
    bottom: 1vmin;
    right: 1vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1vmin solid transparent;
    transition: border 1s;
    cursor: pointer;

    &:hover {
      border: 1vmin solid ${colors.primaryLight};
    }

    & > div {
        border-radius: 50%;
        color: ${colors.white};
        background: ${colors.primaryLight};
        height: 90%;
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Container = styled.div`
    & > div:first-child {
        margin-bottom: 1vmin;
    }
`;

export default CalendarView;