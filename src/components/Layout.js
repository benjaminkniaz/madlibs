import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default ({ printableArea, madLibsText, setMadLibsText }) => (
    <Container>
        <Row>
            <Col>
                <h1>Printable "Mad Libs"</h1>
                <p>
                    Type or paste your story below. Use square brackets to
                    create blanks in the text. Have fun!
                </p>
                <Form className="mad-libs-entry-area">
                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            rows="6"
                            className="mad-libs-create-text"
                            value={madLibsText}
                            onChange={(e) => setMadLibsText(e.target.value)}
                        />
                    </Form.Group>
                </Form>

                <div className="printable-area">{printableArea}</div>

                <Button
                    onClick={window.print}
                    variant="dark"
                    className="print-btn"
                >
                    Print me!
                </Button>

                <p className="credit">by Ben Kniaz</p>
            </Col>
        </Row>
    </Container>
);
