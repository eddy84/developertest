export type Client = {
    id: number;
    name: string;
    email: string;
    street: string;
    postcode: string;
    city: string;
}

export type ClientsResponse = {
    clients: Client[];
}
