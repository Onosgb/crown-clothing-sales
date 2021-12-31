import React from 'react';
import '../homepage/homepage.styles.scss';
import DirectoryContainer from '../../components/directory/directory.container';
import {HomepageContainer} from './homepage.styles';

const HomePage = () => (
    <HomepageContainer>
    <DirectoryContainer />
    </HomepageContainer>
)

export default HomePage;