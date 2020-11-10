import React from 'react';
import axios from 'axios';

class Home extends React.Component {
    state = {
        data: null, 
        isLoading: true
    }

    componentDidMount(){
        this.fetchNewData(1);
    }

    fetchNewData = async(num) => {
        try{
            let response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${num}`);
            let rdata = response.data;
            console.log(" this.state.data ", this.state.data);
            console.log(" rdata ", rdata);
            let updatedData = (this.state.data != null) ? [{...this.state.data }, rdata]: [rdata] ;
            console.log(" updatedData ", updatedData)
            this.setState({ data: updatedData , isLoading: false});
        }catch(error){
            console.log(" error in fetchNewData() ")
        }
    }

    clickHandler = () => {
        let value = document.getElementById("select-num").value;
        this.setState({ isLoading: true }, () => { this.fetchNewData(value) })
    }

    render(){
        // console.log(" state ", this.state.data)
        return(
            <div>
                <select id="select-num">
                {[1,2,3,4,5,6].map(num => <option key={num} value={num}>{num}</option>)}
                </select>
                <button onClick={this.clickHandler}>Fetch data</button>
                {this.state.isLoading ? <p>Loading...</p> : 
                <React.Fragment>
                    {this.state.data != null && <pre>{JSON.stringify(this.state.data, null, 2)}</pre>}
                </React.Fragment>
                }
            </div>
        )
    }
}

export default Home;