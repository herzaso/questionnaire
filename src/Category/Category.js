import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Button } from 'reactstrap';

class Category extends React.Component {
  render() {
    const { content } = this.props;

    const cardStyle = {
        background: content.theme
    };

    return (
      <div>
          <Card body style={cardStyle}>
              <CardTitle>{content.name}</CardTitle>
              <Link to={`/category/${content.id}/1`}>
                <Button size="lg">Go!</Button>
              </Link>
          </Card>
      </div>
    );
  }
};

export default Category;
