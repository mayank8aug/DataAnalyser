class App extends React.Component {
    constructor(props) {
        super(props);
        this.fileUploadHandler = this.fileUploadHandler.bind(this);
    }

    fileUploadHandler() {
        const videoEl = document.getElementById('videoId');
        const file = videoEl.files[0];
        const xhr = new XMLHttpRequest();
        const formData = new FormData();
        formData.append('file', file);
        xhr.open('post', 'abc.com', true);
        xhr.setRequestHeader("Content-Type", "multipart/form-data");
        xhr.send(formData);
    }

    render() {
        return (
            <div>
                <input type="file" id="videoId" />
                <button onClick={this.fileUploadHandler}>Analyse Data</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));