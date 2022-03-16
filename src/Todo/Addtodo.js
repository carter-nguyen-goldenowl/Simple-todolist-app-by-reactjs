import React from "react";
import { toast } from "react-toastify";

class Addtodo extends React.Component {
    state = {
        title: "",
    };

    handleOnchangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
    };

    handleAddtodo = () => {
        if (!this.state.title) {
            toast.error(`Missing title's Todo!`);
            return;
        }

        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title,
        };
        this.props.addNewtodo(todo);
        this.setState({
            title: "",
        });
    };

    render() {
        let { title } = this.state;
        return (
            <div className='flex justify-center'>
                <div className='space-x-5'>
                    <input
                        placeholder='doing...'
                        type='text'
                        className='pl-2 p-2 border-2 border-cyan-500 w-64 rounded-xl'
                        value={title}
                        onChange={(event) => this.handleOnchangeTitle(event)}
                    />
                    <button
                        type='submit'
                        className='bg-cyan-500 rounded-md text-white px-5 text-xl py-1 hover:bg-cyan-900'
                        onClick={() => this.handleAddtodo()}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

export default Addtodo;
