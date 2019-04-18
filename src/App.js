import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import StudentList from './components/StudentList';
import { studentsData } from './students-data'
const App = () => (
    <div>
        <Header
            title="Lets Get Started With React"
            firstName="Asabeneh"
            lastName="Yetayeh"
            year={new Date().getFullYear()}
        />
        <Main techs = {['HTML', 'CSS', 'JavaScript']}/>
        <StudentList students={studentsData} />
        <Footer year = {new Date().getFullYear()} />
    </div>
);

export default App;