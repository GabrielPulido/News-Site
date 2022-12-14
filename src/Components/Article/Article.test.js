import { render, screen } from '@testing-library/react';
import sampleImg from '../../images/dowjones.jpeg';
import Article from './Article';
import { formatDate } from '../../utils';

const mockObj = {
    title: 'Facebook releases new VR headset',
    image_url: sampleImg,
    link: 'facebook.com',
    description: 'lorem ipsum',
    pubDate: '2022-08-28 11:44:01'
}

test(`Article component's background image renders properly`, () => {
    render(<Article articleInfo={mockObj} />);
    const backgroundImage = screen.getByRole('img', { name: 'article_background_image' });
    expect(backgroundImage).toBeInTheDocument();
});

test(`Article component's header renders properly`, () => {
    render(<Article articleInfo={mockObj} />);
    const articleTitle = screen.getByRole('heading', { name: mockObj.title });
    expect(articleTitle).toBeInTheDocument();
});

test(`Article component's header has a link in it`, () => {
    render(<Article articleInfo={mockObj} />);
    const linkToArticle = screen.getByRole('link', { name: mockObj.title });
    expect(linkToArticle).toBeInTheDocument();
});

// Fix this special character test later
// test(`Article component description`, () => {
//     render(<Article articleInfo={mockObj} />);
//     const expectedString = formatDate(mockObj.pubDate) + ' &#x2022; ' + mockObj.description;
//     const description = screen.getByText(expectedString);
//     expect(description).toBeInTheDocument();
// });