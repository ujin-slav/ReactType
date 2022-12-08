import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from './Search';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn()

describe('Serach component',()=>{
    test('renders search', () => {
        render(<Search onChange={onChange}>
                    Find:
               </Search>);
        const linkElement = screen.getByText(/Find/i);
        expect(linkElement).toBeInTheDocument()
    })
    test('onChange work', () => {
        render(<Search onChange={onChange}>
            Find:
       </Search>);
        const linkElement = screen.getByRole('textbox');
        userEvent.type(linkElement,"Opel")
        expect(onChange).toHaveBeenCalledTimes(4)
    })
})
