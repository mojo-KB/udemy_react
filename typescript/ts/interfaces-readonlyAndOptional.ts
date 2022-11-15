interface interfacePerson {
    first: string,
    last: string,
    nickname?: string
}
const thomas: interfacePerson= {
    first: "Thomas",
    last: "Hoddy",
}


interface userInfo {
    readonly id: number,
    first: string,
    last: string,
    nickname?: string
}

const bunla: userInfo = {
    id: 1234,
    first: "Bunla",
    last: "Kour",
}