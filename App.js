class App extends React.Component {
    constructor(props) {
        super(props);
        this.fileUploadHandler = this.fileUploadHandler.bind(this);
    }

    fileUploadHandler() {
        const videoEl = document.getElementById('videoId');
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