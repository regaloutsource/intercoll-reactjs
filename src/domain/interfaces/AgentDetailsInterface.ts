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
    revist: string | null ;
    noOneHome: string | null;
    businessCard: string | null; 
    veda: string | null;
    swd: string | null;
    swo: string | null;
    inboundCall: string | null;
    outboundcall: string | null;
    newDetails: string | null;
    agw: string | null;
    lmtc: string | null;
    nfi: string | null;
    cx: string | null;
    detailsConf: string | null;
    fbMessage: string | null;
    ss: string | null;
    exe: string | null;
    fbtva: string | null;
    doc: string | null;
    fbtvc: string | null;
    repl: string | null;
    estateNum: string | null;
    attachment: string | null;
}


export interface PhoneCustomerInterface {
    customerId: number;
    opCode: string;
    amount: number;
    dd: number;
    date: Date;
    time: string;
}