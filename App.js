class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            serverError: false
        };
        this.fileUploadHandler = this.fileUploadHandler.bind(this);
        this.successHandler = this.successHandler.bind(this);
        this.errorHandler = this.errorHandler.bind(this);
        this.cleanUpStates = this.cleanUpStates.bind(this);
    }

    fileUploadHandler() {
        const videoEl = document.getElementById('videoId');
        const file = videoEl.files[0];
        const xhr = new XMLHttpRequest();
        const formData = new FormData();
        formData.append('file', file);
        xhr.open('post', 'abc.com', true);
        xhr.setRequestHeader("Content-Type", "multipart/form-data");
        xhr.onload = function() {
            if (xhr.status != 200) {
                this.errorHandler()
            } else {
                this.successHandler(xhr.response);
            }
        };
        xhr.onerror = function() {
            this.errorHandler();
        }
        xhr.send(formData);
    }

    successHandler(response) {
        this.setState({ data: response });
    }

    errorHandler() {
        this.setState({ serverError: true });
    }

    cleanUpStates() {
        this.setState({ serverError: false });
    }

    render() {
        const { serverError } = this.state;
        return (
            <div>
                <input className="block" onChange={this.cleanUpStates} type="file" id="videoId" />
                <button className="block" onClick={this.fileUploadHandler}>Analyse Data</button>
                {serverError && <span className="block error">System Error Occuured...</span>}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));