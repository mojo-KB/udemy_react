const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long'}
    ).format(date)
}

function List() {
    return (
        <ul style={
            {
                backgroundColor: 'green',
                color: 'pink'
            }
        }>
            <li>Improve the videophone</li>
            <li>Prepare aeronautic lectures</li>
            <li>Work on teh alcohol-fuelled engine</li>
        </ul>
    )
}
export default function TodoList() {
    const name = 'Gregorio Y. Zara';
    return (
        <div>
        <h1>
            {name}'s ToDo List {formatDate(today)}
        </h1>
        <List />
        
        </div>
    )
}