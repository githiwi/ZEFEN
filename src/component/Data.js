import mesenko from '../images/mesenko.jpeg'
import teddy from '../audio/teddy.mp3'

const DataCategories = {
    cat1: {
        title: 'Genre cat1',
        description: 'This is genre A description.',
        songs: [
            {
                title: 'Song 1',
                artist: 'Artist 1',
                image: 'https://i.imgur.com/MK3eW3As.jpg',
                music: teddy
                
            },
            {
                title: 'Song 2',
                artist: 'Artist 2',
                image: mesenko,
                music: teddy
            }
        ]
    },
    cat2: {
        title: 'Genre cat2',
        description: 'This is genre B description.',
        songs: [
            {
                title: 'Song 1',
                artist: 'Artist 1'
           
                
            },
            {
                title: 'Song 2',
                artist: 'Artist 2'
                
            }
        ]
    },
    Cat3: {
        title: 'Genre Cat3',
        description: 'This is genre C description.',
        songs: [
            {
                title: 'Song 1',
                artist: 'Artist 1'
            },
            {
                title: 'Song 2',
                artist: 'Artist 2'
            }
        ]
    },
    cat4: {
        title: 'Genre D',
        description: 'This is genre D description.',
        songs: [
            {
                title: 'Song 1',
                artist: 'Artist 1'
            },
            {
                title: 'Song 3',
                artist: 'Artist 2'
            }
        ]
    }
};
export default DataCategories;
