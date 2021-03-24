import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Product from './pages/Product';

const mock = {
  "product":{"id":"1","name":"Energy saving light bulb","power":"25W","description":"Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb","price":1299,"quantity":4,"brand":"Philips","weight":77.0,"height":12.6,"width":6.2,"length":6.2,"modelCode":"E27 ES","colour":"Cool daylight","imgUrl":"https://i.ibb.co/2nzwxnQ/bulb.png","__typename":"ProductNode"}
};

describe('Product page', () => {

  test('should be able to increase and decrease product quantity', async () => {
    render(<Product {...mock}/>);

    expect( screen.getByTestId( 'productQuantity') ).toHaveTextContent(1);

    fireEvent.click(screen.getByText('+'));  
    expect( screen.getByTestId( 'productQuantity') ).toHaveTextContent(2);

    fireEvent.click(screen.getByText('-'));
    expect( screen.getByTestId( 'productQuantity') ).toHaveTextContent(1);
  });

  test('should be able to add items to the basket', async () => {

      const setState = jest.fn(( result )=>{
        expect( result ).toEqual({
          items:[{
            id: "1",
            quantity: 1
          }]
        })
      });
      const useStateMock = (initState) => [initState, setState];

      jest.spyOn(React, 'useState').mockImplementation(useStateMock);

      render(<Product {...mock}/>);

      expect(setState).toHaveBeenCalledTimes(0);
      fireEvent.click(screen.getByText('Add to cart'));
      expect(setState).toHaveBeenCalledTimes(1);
  });

});