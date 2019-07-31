import React from "react";
import NavMenu from '../components/NavMenu/NavMenu';
import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

describe("NavMenu component", () => {
  Enzyme.configure({ adapter: new Adapter() });
  test("Matches the snapshot", () => {
    const navMenu = shallow(<NavMenu />);
    expect(navMenu).toMatchSnapshot();
  });
});
