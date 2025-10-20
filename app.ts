import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';

const app = express();

app.use(bodyParser.json());

app.get('/me', async (req: Request, res: Response) => {
    try {
        const fact = await getFact();
        res.status(200).json({
            status: 'success',
            user: {
                email: 'josephanya4real@gmail.com',
                name: 'Joseph Anya',
                stack: 'Node.js/Express'
            },
            timestamp: new Date(),
            fact
        })
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: `An error occured: ${error}`
        })
    }
});

const getFact = async () => {
    const url = 'https://catfact.ninja/fact';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result.fact;
    } catch (error) {
        return 'Catfact API is down';
    }
}

const port = 3000;

app.listen(port, async () => {
    console.log(`application started on port: ${port}`)
});