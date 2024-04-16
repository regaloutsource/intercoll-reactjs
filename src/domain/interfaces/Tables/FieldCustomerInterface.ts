export interface FieldCustomerInterface {
    customerId: number;
    opCode: string;
    amount: number;
    paymentMode:string;
    frequency:string;
    date:Date;
    time:string;
    nopServed: string | null ;
    rsl: string | null;
    gna: string | null;
    onWinz: string | null;
    efs: string | null;
    pfs: string | null;
    escalate: string | null;
    dtrUnknown: string | null;
}

