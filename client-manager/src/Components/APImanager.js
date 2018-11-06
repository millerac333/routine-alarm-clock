export default class APImanager {


    static getAllAppTasks = () => {
        return fetch("https://localhost:5333/api/AppTasks", {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("RAC_token")}`
            },
        })
            .then(a => a.json())
    }

    static getOneAppTask = (id) => {
        return fetch(`https://localhost:5333/api/AppTasks/${id}`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("RAC_token")}`
            },
        })
            .then(res => res.json())
    }

    static putAppTask = (id, body) => {
        return fetch(`https://localhost:5333/api/AppTasks/${id}`, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("RAC_token")}`
            },
            "body": JSON.stringify(
                body
            )
        })
            .then(res => res.json())
            .catch(error => {
                console.log(error)
            })
    }

    static deleteAppTask = (id) => {
        return fetch(`https://localhost:5333/api/AppTasks/${id}`, {
            "method": "DELETE",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("RAC_token")}`,
                "Accept": "application/json"
            },
        })
            .then(res => res.json())
    }

    static getAllRoutines = () => {
        return fetch("https://localhost:5333/api/Routines", {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("RAC_token")}`
            },
        })
            .then(a => a.json())
    }

    static getOneRoutine = (id) => {
        return fetch(`https://localhost:5333/api/Routines/${id}`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("RAC_token")}`
            },
        })
            .then(res => res.json())
    }

    static postRoutine = (body) => {
        return fetch("https://localhost:5333/api/Routines", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("RAC_token")}`, "Accept": "application/json"
            },
            "body": JSON.stringify(
                body
            )
        })
            .then(res => {
                return res.json();
            })
    }

    static deleteRoutine = (id) => {
        return fetch(`https://localhost:5333/api/Routines/${id}`, {
            "method": "DELETE",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("RAC_token")}`,
                "Accept": "application/json"
            },
        })
            .then(res => res.json())
    }

    static putToggleRoutine = (id, body) => {
        return fetch(`https://localhost:5333/api/Routines/${id}`, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("RAC_token")}`
            },
            "body": JSON.stringify(
                body
            )
        })
            .then(res => res.json())
            .catch(error => {
                console.log(error)
            })
    }
}