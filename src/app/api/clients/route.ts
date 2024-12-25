import {NextRequest, NextResponse} from "next/server";
import {initDatabase} from "@/helpers/initDatabase";
import {CreateClientInput, createClientInputSchema} from "@/schemas/CreateClientInput";
import {Client} from "@/entities/Client";


export async function POST(request: NextRequest) {

    const database = await initDatabase();

    const data = await request.json();
    try {
        const input: CreateClientInput = createClientInputSchema.parse(data)


        const repository = database.getRepository(Client)

        const client = repository.create();
        client.name = input.name;
        client.email = input.email;
        client.street = input.street;
        client.postcode = input.postcode;
        client.city = input.city;
        if (input.notes !== undefined) {
            client.notes = input.notes;
        }

        const clientSaved = await repository.save(client);

        return NextResponse.json({client: clientSaved}, {status: 200});

    } catch (err) {
        console.log(err);

        return NextResponse.json({error: err}, {status: 500});

    }
}
