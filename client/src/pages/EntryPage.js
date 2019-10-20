import React from 'react';
import NavBar from '../components/NavBar';
import FormWrapper from '../containers/FormWrapper';
import Footer from '../components/Footer';
import ChoicesContext from '../context/ChoicesContext';

const EntryPage = ({history}) => {
    return (
        <>
            <NavBar />
            <ChoicesContext.Consumer>
                {({ setChoices }) => <FormWrapper setChoices={setChoices} history={history}/>}
            </ChoicesContext.Consumer>
            <Footer />
        </>
    );
}

export default EntryPage;