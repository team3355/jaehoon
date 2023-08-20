// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function BottomMenu() {
    const dropdownStyle = {
        marginTop: '1em',
        marginLeft: '1em',
    }; // Define your dropdown style here
   

    return (
        <div>
            <Dropdown text='Menu' pointing='top left' style={dropdownStyle}>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/Polly" icon='pencil' text='Polly' />
                    <Dropdown.Item as={Link} to="/reko" icon='pencil' text='Reko' />
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
        
}
export default BottomMenu;
