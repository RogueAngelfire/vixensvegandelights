import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">&copy; 2021 Vixen's Vegan Delights website designed and hosted by Robin Collins</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer