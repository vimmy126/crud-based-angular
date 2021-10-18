export interface Passenger {
    id: number;
    name: string;
    status: boolean;
    bookedDate: number;
    baggage?: string;
}