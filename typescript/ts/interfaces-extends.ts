interface Person3 {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Enginner extends Person3, Employee {
    level: string,
    language: string[]
}

const pierre: Enginner = {
    name: "Pierre",
    id: 12345,
    email: "pierre@gmail.com",
    level: "SRank",
    language: ["JS", "Python"]
}

/* 
interfaces allow users to reshape the object by reopening the interfaces.

interfaces use extends keyword while type alias using &
 */