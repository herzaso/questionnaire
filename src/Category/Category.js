import React from 'react';
import { Card, CardTitle, Button } from 'reactstrap';

const Category = (props) => {

  const {content} = props;

  console.log("category content", content)

  const cardStyle = {
      background: content.theme
  };

  return (
    <div>
        <Card body style={cardStyle}>
            <CardTitle>{content.name}</CardTitle>
            <Button size="lg">Go!</Button>
        </Card>
    </div>
  );
};

export default Category;
