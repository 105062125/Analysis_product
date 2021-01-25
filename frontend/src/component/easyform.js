import React from 'react';

class EasyForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {name : '', email : ''}
        this.changeState = this.changeState.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    changeState(event){
        let changeName = event.target.name
        this.setState({[changeName]:event.target.value})
        console.log('改了改了')
    }

    submitForm(event){
        alert("You add a user in database successfully")
        let url = '/create_user/'+ String(this.state.name)+'/'+ String(this.state.email)
        fetch(url).then(res => res.text()).then(data =>{
            data = JSON.parse(data);
            
        })
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submitForm}> 
                <label>Name：</label>
                <input id="name" name="name" placeholder="name..."value={this.state.name} onChange={this.changeState}/>
                <label>Email：</label>
                <input id="email" name="email" value={this.state.email} onChange={this.changeState}/>
                <br/>
                    <input type="submit" value="送出表單"  />
            </form>
        )
    }
}


export default EasyForm;