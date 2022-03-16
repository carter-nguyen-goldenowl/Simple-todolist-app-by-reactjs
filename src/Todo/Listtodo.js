import React from "react";
import Addtodo from "./Addtodo";
import { toast } from "react-toastify";

class Listtodo extends React.Component {
    state = {
        listtodos: [
            { id: "todo1", title: "Doing work 1" },
            { id: "todo2", title: "Doing work 1" },
            { id: "todo3", title: "Doing work 1" },
        ],
        editTodo: {},
    };

    addNewtodo = (todo) => {
        this.setState({
            listtodos: [...this.state.listtodos, todo],
        });
        toast.success("Add succeed");
    };

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listtodos;
        currentTodos = currentTodos.filter((item) => item.id !== todo.id);
        this.setState({
            listtodos: currentTodos,
        });
        toast.success("Delete succeed");
    };

    handleOnChangeEdit = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy,
        });
    };

    handleEdittodo = (todo) => {
        let { editTodo, listtodos } = this.state;
        let isEmtyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmtyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listtodos];

            let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);

            listTodoCopy[objIndex].title = editTodo.title;

            this.setState({
                listtodos: listTodoCopy,
                editTodo: {},
            });
            toast.success("Edit succeed");
            return;
        }

        //edit
        this.setState({
            editTodo: todo,
        });
    };

    render() {
        let { listtodos, editTodo } = this.state;

        let isEmtyObj = Object.keys(editTodo).length === 0;
        return (
            <>
                <h2 className='bg-emerald-500 text-white text-center max-w-2xl font-mono text-5xl shadow-xl font-medium m-auto mt-5 mb-5 p-5 rounded-lg'>
                    ToDo List
                </h2>

                <Addtodo addNewtodo={this.addNewtodo} />

                {listtodos &&
                    listtodos.length > 0 &&
                    listtodos.map((item, index) => {
                        return (
                            <div className='grid justify-items-center' key={item.id}>
                                <div className='bg-white text-center rounded-xl p-6 w-2/6 m-5'>
                                    <div className=' flex justify-between'>
                                        <h5 className='font-sans font-semibold text-lg'>
                                            {isEmtyObj === true ? (
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            ) : (
                                                <>
                                                    {editTodo.id === item.id ? (
                                                        <span>
                                                            <input
                                                                className='p-1 border-2 border-cyan-500 w-52 rounded-xl'
                                                                value={editTodo.title}
                                                                onChange={(event) => this.handleOnChangeEdit(event)}
                                                            />
                                                        </span>
                                                    ) : (
                                                        <span>
                                                            {index + 1} - {item.title}
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                        </h5>
                                        <button
                                            className='bg-emerald-500 text-white font-medium px-6 ml-28 py-1 rounded-xl hover:bg-emerald-900'
                                            onClick={() => this.handleEdittodo(item)}
                                        >
                                            {isEmtyObj === false && editTodo.id == item.id ? "Save" : "Edit"}
                                        </button>
                                        <button
                                            className='bg-red-500 text-white font-medium px-2 py-1 rounded-xl hover:bg-red-900'
                                            onClick={() => this.handleDeleteTodo(item)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </>
        );
    }
}

export default Listtodo;
