import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Category = (props) => {

  const {content} = props;
  
  const cardStyle = {
      background: content.theme
  };

  return (
    <div>
        <Card body style={cardStyle}>
            <CardTitle>{content.name}</CardTitle>
            {/* <CardText>With supporting text below as a natural lead-in to additional content.</CardText> */}
            <Button>Go!</Button>
        </Card>
    </div>
  );
};

export default Category;