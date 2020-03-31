import React, { Component } from 'react'

class Test extends Component {

    state = {
        data: [],
        inputValue: ''
    }
    getData = async () => {
        
        const data = await fetch('http://localhost:3002/data')
        .then(this.checkStatus)
        .then(response => response.json())

      
        this.setState({ data })
        console.log(data)

    }

    async setData() {
        const id = 1;
        const res = await fetch('http://localhost:3002/data', {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                title: "Some Text"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        console.log(data)
    }

    async deleteData() {
        const id = 3;
        const res = await fetch(`http://localhost:3002/data/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        console.log(data)
    }

    async updateData() {
        const id = 1;
        const res = await fetch(`http://localhost:3002/data/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                main: "bpt",
                title: "Bot Hey manhjhj"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        console.log(data)
    }

    checkStatus(response) {
      if(response.ok) return response;

      let error = new Error(response.statusText);
      error.response = response;
      return Promise.reject(error);
    }

    onChangeHandler = (e) => {
      this.setState({
          inputValue: e.target.value
      })
    }

    setAmd = (e) => {
        this.setState({
            inputValue: e.target.value
        })
      }

    render() {
        return (
            <div>
              
                <button onClick={this.getData}>GET</button>
                <button onClick={this.setData}>POST</button>
                <button onClick={this.deleteData}>DELETE</button>
                <button onClick={this.updateData}>UPDATE</button>

            </div>
        )
    }
}

export default Test;
