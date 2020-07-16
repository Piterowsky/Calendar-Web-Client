import { getDaysOfTheWeekLocalized } from '../../utils/date';
import styled from 'styled-components';
import colors from '../../utils/colors';
import React from 'react';

function MonthView({ days }) {
    const daysOfMonth = [...Array(days).keys()].map((day) => day + 1);

    const daysOfTheWeek = getDaysOfTheWeekLocalized().map((day) => (
        <WeekDayLabel key={day}>
            <span>{day}</span>
        </WeekDayLabel>
    ));

    const daysTiles = daysOfMonth.map((day) => (
        <MonthViewDayTile key={day}>
            <span className="day">{day}</span>
        </MonthViewDayTile>
    ));

    return (
        <MonthViewContainer>
            {daysOfTheWeek}
            {daysTiles}
        </MonthViewContainer>
    );
}

const MonthViewContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr repeat(5, 5fr);
    grid-gap: 0.15vmin;
    height: calc(100vh - 80px);
`;

const MonthViewDayTile = styled.div`
    position: relative;
    padding: 0;
    border: 2px solid gray;

    & > .day {
        font-size: 2rem;
        font-weight: bold;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        color: ${colors.lightgray};
        transform: translate(-50%, -50%);
        filter: blur(1px);
        user-select: none;
    }
`;

const WeekDayLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default MonthView;