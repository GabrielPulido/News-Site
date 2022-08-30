import { render, screen } from '@testing-library/react';
import SwitchCategoryButtons from './SwitchCategoryButtons';
import { categoriesList } from '../../utils';

test('all categories in categoriesList are rendered in the Categories/navbar component', () => {
    render(<SwitchCategoryButtons categoriesList={categoriesList} />);

    const buttons = categoriesList.map(
        element => {
            const { name } = element;
            return screen.getByText(name)
        }
    );

    buttons.forEach(element => expect(element).toBeInTheDocument());
});
