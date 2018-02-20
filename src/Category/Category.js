import React from 'react';
import { Card, CardTitle, Button } from 'reactstrap';

const Category = (props) => {

  const {content} = props;

  const cardStyle = {
      background: content.theme
  };

  return (
    <div>
        <Card body style={cardStyle}>
            <CardTitle>{content.name}</CardTitle>
            <Button>Go!</Button>
        </Card>
    </div>
  );
};

export default Category;
