import React from 'react';
import { ScheduleWrapper } from "./ScheduleElements"
import { Container, HeadingH1 } from "../Commons"
import CustomizedTimeline from "./Timeline";

const Schedule = () => {
    return (
        <>
            <Container id="schedule">
                <HeadingH1 className='mb-8'>Schedule</HeadingH1>
                <ScheduleWrapper>
                    <CustomizedTimeline />
                </ScheduleWrapper>
            </Container>
        </>
    )
}

export default Schedule;
