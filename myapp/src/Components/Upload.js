import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

function Upload () {
    return (

        <div>
            <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
            />
            <Container>
            <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label className='d-flex justify-content-center mt-5' ><h1>Upload</h1></Form.Label>
            <Form.Control type="file" multiple style={{"padding" : "40px"}}/>
            </Form.Group>
            <input type="submit" className ="btn btn-success" value="Submit" />
            </Container>
            
        </div>
        
    )
}

export default Upload
