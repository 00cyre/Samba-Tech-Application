import React from 'react';
import CharacterPage from '../characterPage';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('Component <CharacterPage/>', function () {
    let component;
    let getCharacter = jest.fn();
    let Characters = [{ name: "Walter White" }];
    beforeEach(() => {
        component = shallow(
            <CharacterPage
                getCharacter={getCharacter}
                Characters={Characters}
            />
        );
    });

    it('Should Render <CharacterPage/> ', () => {
        expect(component).toMatchSnapshot();
    });

});
