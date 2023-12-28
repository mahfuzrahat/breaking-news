import React from 'react';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';

const News = (props) => {
    console.log(props)
    const {author,title, content, description, rlToImage, url}= props.article
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Author: {author}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                {/* <p>{url}</p> */}
                {/* <Card.Img>< img src={rlToImage} alt="" /></Card.Img> */}
                {/* <Card.Link href="#">Card Link</Card.Link> */}
                {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
    );
};

export default News;