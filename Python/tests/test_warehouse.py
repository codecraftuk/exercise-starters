from warehouse.order import Order

def test_build_picklist():
    order = Order("ORD00020")
    order.add_item("PROD00100", 5)
    order.add_item("PROD00390", 20)

    # picklist = TODO

    assert picklist == None # TODO:
