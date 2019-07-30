import './TabMenu.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class TabMenu extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }
    
    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
            overviewRepositories: [],
        };
    }
    

    handleTabClicked = (tab) => {
        this.setState({ activeTab: tab });
    }

    render() {
        const {
            handleTabClicked,
            props: {
              children,
            },
            state: {
              activeTab,
            }
          } = this;

        return(
            <div>
                <ul className="tab-menu">
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={handleTabClicked}
                            />
                        );
                    })}
                </ul>
                
                <div className="tab-content">
                    {console.log("tab content children: ", children)}
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        )
    }
}

export default TabMenu;