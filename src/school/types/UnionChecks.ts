export class UnionChecks {
    public functionWithUnionType(paramOne: number | string): void {
        // this cannot be called, 'cuase we do not know exact type of 'paramOne' - this is ERROR
        // paramOne.toLowertCase()
        // paramOne.toFixed();

        // but if we do the check for type, we can use functions for string or number - this is OK
        if (typeof paramOne === 'string') {
            // it is string
            paramOne.toLowerCase();
        } else {
            // it is number
            paramOne.toFixed();
        }
    }

    public functionWithAcceptableTypes(paramOne: 'Metallica' | 'Slayer' | 100 | true): void {
        // this function can be called either with "Metallica" or "Slayer" as values
        this.functionWithAcceptableTypes('Metallica');
        this.functionWithAcceptableTypes('Slayer');
        this.functionWithAcceptableTypes(100);
        this.functionWithAcceptableTypes(true);

        // this won't work - this is ERROR
        // this.functionWithAcceptableTypes("Megadeth");
        // this.functionWithAcceptableTypes(200);
        // this.functionWithAcceptableTypes(false);
    }

    public functionWithAcceptableTypesTwo(paramOne: SomeCustomTypeOne | SomeCustomTypeTwo): void {
        // this won't work - 'id' and 'desc' - this is ERROR
        // if(paramOne.id) { }

        // this check is safe - this is OK
        if ('id' in paramOne) {
        }

        // this will work - 'name' exists in both types - this is OK
        if (paramOne.name) {
        }

        // now magic of TypeScript - for checking the attribute 'name' we can be sure what kind of type is used
        if (paramOne.name === 'One') {
            paramOne.id; // SomeCustomTypeOne
        } else {
            paramOne.desc; // SomeCustomTypeTwo
        }
    }
}

type SomeCustomTypeOne = {
    id: number;
    name: 'One';
};

type SomeCustomTypeTwo = {
    desc: string;
    name: 'Two';
};
