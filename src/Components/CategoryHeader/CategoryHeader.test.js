import { render, screen } from '@testing-library/react';
import CategoryHeader from './CategoryHeader';
import { categoriesList } from '../../utils';

test('category header is rendered properly', () => {
    render(<CategoryHeader category={categoriesList[0]} />);
    const categoryHeader = screen.getByRole('heading', { name: categoriesList[0].name })
    expect(categoryHeader).toBeInTheDocument();
});

test('image is rendered properly', () => {
    render(<CategoryHeader category={categoriesList[0]} />);
    const img = screen.getByRole('img', { name: 'business_logo' })
    expect(img).toBeInTheDocument();
});
