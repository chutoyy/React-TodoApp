interface TodoProps {
    id: number
    title: string
    isDone: boolean
}

function Todo(props: TodoProps) {
    const status = props.isDone ? "Done" : "NotDone"
    
    return (
        <div>
            <table>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>{props.id}</td>
                    <td> {props.title}</td>
                    <td>{status === "Done" ? <span style={{ color: "green" }}> {status}</span> : <span style={{ color: "red" }}> {status}</span> }  </td>
                </tr>
            </table>

        </div>
    )
}

export default Todo