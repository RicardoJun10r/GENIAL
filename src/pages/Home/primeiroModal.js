import './home.css';
import React, {Component} from 'react';
import ReactModal from 'react-modal-resizable-draggable';

class PrimeiroModal extends Component {
    constructor () {
      super();
  
      this.state = {
        modalIsOpen: false
      };
  
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
  
    openModal () {
      this.setState({
        modalIsOpen: true
      });
    }
  
    closeModal () {
      this.setState({
        modalIsOpen: false
      });
    }
  
    render () {
      return (
        <div>
          <button className="btn" onClick={this.openModal}>
            abrir primeiro
          </button>
          
          <ReactModal
            initWidth={500}
            intiHeight={400}
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            disableResize={false}
          >
            <h3>Select Indicator</h3>
            <div className="body">
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <button
              className="btn"
              onClick={this.closeModal}
             >
                Close
              </button>
            </div>
          </ReactModal>
        </div>
      );
    }
  }
  
  export default PrimeiroModal;