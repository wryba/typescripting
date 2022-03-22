export class Types {
    public unknownVsAny(): void {
        // any, unknown:
        // allow assigning any type
        // any:
        // allows being assigned to any type
        // allows calling any method
        // unknown:
        // doesn't allow being assigned to any type
        // doesn't allow calling any method

        // To 'any' and 'unknown' you can assign anything - this is OK
        const anyVar: any = 'anyVariable';
        const unknownVar: unknown = 'unknownVariable';

        // 'any' can be assign to other variable - this is OK
        const variableOne: string = anyVar;

        // 'unknonwn' cannot be assign to other variable - this is ERROR
        // const variableTwo: string = unknownVar; // ERROR

        // BUT 'unknonwn' can be cast to specific type - this is OK
        const variableThree: string = unknownVar as string;
        // and now 'variableThree' can be used as 'string'

        // 'any' allows to call function/s - possible error will be thrown on runtime
        anyVar.trim();

        // 'unknow' does not allow to call function/s - this is ERROR 
        // unknownVar.trim()
    }
}