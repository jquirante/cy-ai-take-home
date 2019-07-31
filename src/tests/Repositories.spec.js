import React from 'react';
import TabMenu from '../components/TabMenu/TabMenu';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

describe("TabMenu Component", ()=>{
    Enzyme.configure({ adapter: new Adapter() });
    test("it should be defined", ()=> {
        expect(TabMenu).toBeDefined();
    });
});