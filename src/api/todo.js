const addTodo = async (title, done) => {
    console.log(title)
    try {
        let res = await fetch("http://localhost:3001/api/todos", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, done })
        })
        return await res.json()
    } catch (error) {
        console.log(error);
    }
}
export { addTodo }