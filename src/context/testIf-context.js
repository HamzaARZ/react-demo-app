import React from 'react';

const testIfContext = React.createContext({
    testIf : false,
    showIfTest: () => {}
});

export default testIfContext;
