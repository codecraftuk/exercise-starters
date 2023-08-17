export type OrderId = string;
export type Sku = string;

export interface OrderLineItem {
    productId: Sku;
    quantity: number;
};

export interface Order {
    id: OrderId;
    items: OrderLineItem[];
};