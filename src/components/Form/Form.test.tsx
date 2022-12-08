import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';
import { IAuto } from '../../App';

const lustAuto:IAuto[] = [
    {
      name: "Volvo",
      engine: "1.6",
      power:100
    },
    {
      name: "VW",
      engine: "2.0",
      power:200
    },
    {
      name: "Opel",
      engine: "2.6",
      power:300
    }
  ]

describe('Test component form',()=>{
    test('renders learn react link', () => {
        render(<Form listAuto={lustAuto}/>);
        const linkElement = screen.getByText(/Opel/i);
        expect(screen.getByRole('list')).toBeInTheDocument()
        expect(linkElement).toBeInTheDocument()
    });
    test('renders without data', () => {
      render(<Form/>);
      // const linkElement = screen.queryByRole('list');
      // expect(linkElement).not.toBeInTheDocument()
    });
    test('List snapshot', () => {
      const { container } = render(<Form listAuto={lustAuto}/>)
      expect(container).toMatchSnapshot()
    });
})

