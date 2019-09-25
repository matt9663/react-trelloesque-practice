import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import renderer from 'react-test-renderer';


describe('List component', () => {
    it('renders without crashiing', () =>{
        const cards = [{
            title: 'test1',
            key: 'a'
        },
        {
            title: 'test2',
            key: 'b'
        }
    ];
        const div = document.createElement('div');
        ReactDOM.render(<List header="tester"
            cards={cards}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
        const cards = [{
            title: 'test1',
            key: 'a'
        },
        {
            title: 'test2',
            key: 'b'
        }
    ];
        const tree = renderer
            .create(<List header="tester" cards={cards}/>)
            .toJSON();
    expect(tree).toMatchSnapshot();   
    });
});