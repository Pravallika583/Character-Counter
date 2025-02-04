import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

// Replace your code here
class App extends Component {
  state = {inputValue: '', inputList: []}

  onChange = event => {
    this.setState({inputValue: event.target.value})
  }

  addToView = (event) => {
    event.preventDefault()
    const {inputValue} = this.state
    const newInput = {
      id: uuidv4(),
      input: inputValue,
      count: inputValue.length,
    }
    this.setState(prevState => ({
      inputList: [...prevState.inputList, newInput],
      inputValue: '',
    }))
  }

  render() {
    const {inputValue, inputList} = this.state
    return (
      <div className="charactercount-container">
        <div className="inputview-container">
          <div className="heading-container">
            <h1 className="heading">Count the characters like a Boss....</h1>
          </div>
          <div className="user-inputs">
            {inputList.length === 0 ? (
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              <ul className="inputcount-view">
                {inputList.map(eachItem => (
                  <li key={eachItem.id}>
                    <p>
                      {eachItem.input} : {eachItem.count}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="inputadd-container">
          <div className="text-container">
            <h1 className="text">Character Counter</h1>
          </div>
          <form className="textadd-container"  onSubmit={this.addToView}>
            <input
              type="text"
              placeholder="Enter the characters here"
              className="characters"
              value={inputValue}
              onChange={this.onChange}
            />
            <button className="add-button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
