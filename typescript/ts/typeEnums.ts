import { BlockLike } from "typescript";

// Numerical Enums
enum Response1 {
    no,  // 1
    yes, // 2
    maybe // 3
}

enum Response2 {
    no = 2, // 2
    yes, // 3
    maybe // 4
}

enum Response3 {
    no = 2, // 2
    yes = 10, // 10 
    mayber = 23 // 23
}

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const status2 = OrderStatus.DELIVERED;

const isDelivered = (status: OrderStatus): boolean => {
    return  status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.PENDING)

const enum ArrowKeys {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right'
}

const order = {
    orderNumber: 1235412312345134,
    status: ArrowKeys.UP;
}