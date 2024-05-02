import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './PriceCard.css'

const PriceCard = ({cardDetails}) => {
    return (

        <>
            <Container>
                <Row>
            {cardDetails.map((ele, index) => {
            
              return (
                <>
                <Col sm={12} md={4}>
                <Card>
                <div key={index}>
                    <Card.Header>
                        <h5>{ele.title}</h5>
                        <h1>{ele.price}</h1>
                    </Card.Header>
                    <ListGroup>
                        <ListGroup.Item><span className='fa-solid fa-check'></span><span>{ele.user}</span></ListGroup.Item>
                        <ListGroup.Item><span className='fa-solid fa-check'></span><span>{ele.storage}</span></ListGroup.Item>
                        <ListGroup.Item><span className='fa-solid fa-check'></span><span>{ele.publicprojects}</span></ListGroup.Item>
                        <ListGroup.Item><span className='fa-solid fa-check'></span><span>{ele.access}</span></ListGroup.Item>
                        <ListGroup.Item className={ele.privateprojectstext}><span className={ele.privateprojectsenabled}></span><span >{ele.privateprojects}</span></ListGroup.Item>
                        <ListGroup.Item className={ele.supporttext}><span className={ele.supportenabled}></span><span >{ele.support}</span></ListGroup.Item>
                        <ListGroup.Item className={ele.subdomaintext}><span className={ele.subdomainenabled}></span><span>{ele.subdomain}</span></ListGroup.Item>
                        <ListGroup.Item className={ele.reporttext}><span className={ele.reportenabled}></span><span>{ele.report}</span></ListGroup.Item>
                    </ListGroup>
                    <Button>BUTTON</Button>
                 </div>
               </Card>
                </Col>
               
                </>
              )
        
          })}
          </Row>
          </Container>
        </>
    );
};

export default PriceCard;