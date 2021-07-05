import { API_URL } from '../config'

const addTodo = async (title, done) => {
    console.log(title)
    try {
        let res = await fetch(`${ API_URL }/api/todos`, {
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

const getToDos = async () => {

    try {

        let res = await fetch(`${ API_URL }/api/todos`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

const delToDo = async (id) => {
    try {
        let res = await fetch(`${ API_URL }/api/todos/${ id }`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

const updateToDo = async (id) => {

    try {

        let res = await fetch(`${ API_URL }/api/todos/${ id }`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return await res.json()
    } catch (error) {
        console.log(error)
    }

}

export { addTodo, getToDos, delToDo, updateToDo }