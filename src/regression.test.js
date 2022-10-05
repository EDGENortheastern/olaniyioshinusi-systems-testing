import renderer from 'react-test-renderer';
import App from './App';

it('checks that App Dom renders correctly', () => {
    const appTree = renderer.create(<App/>).toJSON();
    expect(appTree).toMatchSnapshot();
})