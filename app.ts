import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';

const app = express();

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response)=> {
    res.status(200).json({
        email: "josephanya4real@gmail.com",
        current_datetime: new Date(),
        github_url: "https://github.com/josephanya/stage-zero"
    })
});

const port = 3000;

app.listen(port, async () => {
    console.log(`application started on port: ${port}`)
});