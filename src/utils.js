// Make these array elements objects and add images to them (needed for CategoryHeader)
import businessImg from './images/chart-line-solid.svg';
import techImg from './images/laptop-code-solid.svg';
import entertainmentImg from './images/ticket-solid.svg';
import healthImg from './images/heart-solid.svg';
import scienceImg from './images/flask-solid.svg';
import sportsImg from './images/dumbbell-solid.svg';

export const categoriesList = [
    {
        name: 'Business',
        img: businessImg,
    },
    {
        name: 'Technology',
        img: techImg,
    },
    {
        name: 'Entertainment',
        img: entertainmentImg,
    },
    {
        name: 'Health',
        img: healthImg,
    },
    {
        name: 'Science',
        img: scienceImg,
    },
    {
        name: 'Sports',
        img: sportsImg,
    }
];

export const formatDate = (date) => {
    return date.slice(0, 10);
}