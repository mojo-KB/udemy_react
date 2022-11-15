
// turple is a fix length and order
const turpleExample: string[] = [];

const color: [number, number, number] = [255, 0, 255]

type HTTPResponse = [ number, string];

type readonlyExample = {
    readonly name: string,
    readonly age?: number
}


const goodRes: HTTPResponse = [200, "OK"]
const badRes: HTTPResponse = [404, "Not Good"]

goodRes.push(123)