import React from 'react';
import { CharacterContainer, mapStateToProps } from '../characterContainer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('Component <CharacterContainer/>', function () {
    let component;
    let getCharacter = jest.fn();
    let Characters = [{ name: "Walter White" }];
    beforeEach(() => {
        component = shallow(
            <CharacterContainer
                getCharacter={getCharacter}
                Characters={Characters}
            />
        );
    });

    it('Should Render <CharacterContainer/> ', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should Render  <CharacterPage/> on <CharacterContainer/>', () => {
        expect(component.find('#characterPage').exists()).toEqual(true);
    });
    it('Should Test mapStateToProps', () => {
        expect(mapStateToProps({
            characterReducer: 'lmao'
        })).toEqual({
            Characters: 'lmao'
        });
    });
});
