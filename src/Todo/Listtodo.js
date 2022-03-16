import { list } from "postcss";
import React from "react";
import Addtodo from "./Addtodo";

class Listtodo extends React.Component {
  state = {
    listtodos: [
      { id: "todo1", title: "Doing work 1" },
      { id: "todo2", title: "Doing work 2" },
      { id: "todo3", title: "Doing work 3" },
      { id: "todo4", title: "Doing work 3" },
    ],
  };

  addNewtodo = (todo) => {
    console.log(this.state.listtodos)
    console.log(todo)
      this.setState({
          listtodos: [...this.state.listtodos, todo]
      })
  }

  render() {
    let { listtodos } = this.state;
    return (
      <>
        <h2 className="bg-emerald-500 text-white text-center max-w-2xl font-mono text-5xl shadow-xl font-medium m-auto mt-5 mb-5 p-5 rounded-lg">
          ToDo List
        </h2>

        <Addtodo addNewtodo={this.addNewtodo}/>

        {listtodos && listtodos.length > 0 && listtodos.map((item,index) =>{
            return(
                <div className="grid justify-items-center" key={item.id}>
                <div className="bg-white text-center rounded-xl p-6 w-2/6 m-5" >
                    <div className=" flex justify-between">
                        <h5 className="font-sans font-semibold text-lg">
                            {index + 1} - {item.title}
                        </h5>
                        <button className="bg-yellow-500 text-white font-medium px-6 ml-28 py-1 rounded-xl hover:bg-yellow-900">
                            Edit
                        </button>
                        <button className="bg-red-500 text-white font-medium px-2 py-1 rounded-xl hover:bg-red-900">
                            Remove
                        </button>
                    </div>
                </div>
                </div>
            );
        })
        }
      </>
    );
  }
}

export default Listtodo;
