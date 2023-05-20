import {Component} from 'react'
import './index.css'

class EditableTextInput extends Component {
  state = {inputValue: '', isEditingOn: true}

  changeInputText = event => {
    this.setState({inputValue: event.target.value})
  }

  saveInput = () => {
    this.setState({isEditingOn: false})
  }

  editInput = () => {
    this.setState({isEditingOn: true})
  }

  render() {
    const {inputValue, isEditingOn} = this.state
    return (
      <div className="main-container">
        <div className="editable-container">
          <h1>Editable Text Input</h1>
          {isEditingOn ? (
            <div className="text-container">
              <input
                type="text"
                onChange={this.changeInputText}
                value={inputValue}
                className="input-container"
              />
              <button type="button" onClick={this.saveInput} className="button">
                Save
              </button>
            </div>
          ) : (
            <div className="text-container">
              <p>{inputValue}</p>
              <button type="button" onClick={this.editInput} className="button">
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EditableTextInput
