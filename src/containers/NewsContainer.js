import React, { Component } from 'react'
import NewsCard from '../components/NewsCard'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

export default class NewsContainer extends Component {

    state = {
        blogs: [],
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/blogs')
            .then(response => response.json())
            .then(data => this.setState({blogs: data}));
    }
// this will eventually iterate through the most liked blogs and content 
    render() {
        return (
            <div className='cards'>
                { this.state.blogs.map(blog => <NewsCard key={blog.id} {...blog}/>) }
            </div>
        )
    }
}
