import { Order } from './order';

describe('building a picklist', () => {
  it('finds the items in an order', () => {
    const order: Order = {
      id: "ORD00020",
      items: [
        {
          productId: "PROD00100",
          quantity: 5,
        },
        {
          productId: "PROD00390",
          quantity: 20,
        },
      ]
    };

    const picklist = {}; // TODO

    // expect picklist to contain the locations and count of items to pick from each bin to fulfill the order.
  });
});