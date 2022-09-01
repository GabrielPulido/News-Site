import { render, screen } from '@testing-library/react';
import TitleLink from './TitleLink';

test('Link works', () => {
    const url = 'google.com';
    const title = 'Test'
    render(<TitleLink link={url} title={title} />);
    const linkElement = screen.getByRole('link', { name: title });
    expect(linkElement).toHaveAttribute('href', url);
});

test('title works', () => {
    const url = 'yahoo.com'
    const title = 'Yahoo';
    render(<TitleLink link={url} title={title} />);
    const linkElement = screen.getByRole('link', { name: title });
    expect(linkElement).toBeInTheDocument();
})