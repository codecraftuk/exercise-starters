class OrderLineItem:
    """
    A class to represent a element of an order.
    """
    def __init__(self, product_code, quantity):
        self.product_code = product_code
        self.quantity = quantity

class Order:
    """
    A class to represent an order
    """
    def __init__(self, order_id):
        self.order_id = order_id
        self.items = []

    def add_item(self, product_code, quantity):
        self.items.append(OrderLineItem(product_code, quantity))