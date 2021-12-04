import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveDeliveryAddress } from '../actions/basketActions'

function DeliveryScreen({ history }) {

    const basket = useSelector(state => state.basket)
    const { deliveryAddress } = basket

    const dispatch = useDispatch()

    const [address, setAddress] = useState(deliveryAddress.address)
    const [town, setTown] = useState(deliveryAddress.town)
    const [city, setCity] = useState(deliveryAddress.city)
    const [county, setCounty] = useState(deliveryAddress.county)
    const [postCode, setPostCode] = useState(deliveryAddress.postCode)
    const [country, setCountry] = useState(deliveryAddress.country)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveDeliveryAddress({ address, city, postCode, country }))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Delivery</h1>
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter address'
                        value={address ? address : ''}
                        onChange={(e) => setAddress(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='address'>
                    <Form.Label>Town</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter town'
                        value={town ? town : ''}
                        onChange={(e) => setTown(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter city'
                        value={city ? city : ''}
                        onChange={(e) => setCity(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='address'>
                    <Form.Label>County</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter County'
                        value={county ? county : ''}
                        onChange={(e) => setCounty(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='postalCode'>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter postal code'
                        value={postCode ? postCode : ''}
                        onChange={(e) => setPostCode(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter country'
                        value={country ? country : ''}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='warning'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default DeliveryScreen