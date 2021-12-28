import React from 'react';
import AnnouncementVisitors from '../AnnouncementVisitors/AnnouncementVisitors';
import CourseStatistics from '../CourseStatistics/CourseStatistics';
import DemandCourse from '../DemandCourse/DemandCourse';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Welcome />
            <CourseStatistics />
            <AnnouncementVisitors />
            <DemandCourse />
        </div>
    );
};

export default Home;