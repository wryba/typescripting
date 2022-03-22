export class ReadonlyCheck {
    public readolnyCheck(): void {
        const customers: Readonly<Customer>[] = [
            {
                id: 'one',
                name: 'Agent 007',
            },
            {
                id: 'two',
                name: 'Agent Orange',
            },
        ];

        customers.forEach((customer) => {
            // since 'customers' is a readonly array, children are immutable as well - this is ERROR
            // customer.name = 'XXX';
        });
    }
}

type Customer = {
    id: string;
    name: string;
};
