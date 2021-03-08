import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import StartStopButton from './StartStopButton';

afterEach(cleanup);

describe('<StartStopButton>', () => {
    test('renders properly', () => {
        const { queryByTestId } = render(<StartStopButton onClick={(e) => {}}/>);
        expect(queryByTestId('button')).toBeTruthy();
    });

    test('label changes on click', () => {
        const { queryByTestId } = render(<StartStopButton onClick={(e) => {}} />);
        const button = queryByTestId('button') as HTMLButtonElement;
        expect(button.innerHTML).toBe('Start');
        fireEvent.click(button);
        expect(button.innerHTML).toBe('Stop');
    });
});