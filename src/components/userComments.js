import React, { PureComponent } from 'react';

class UserComments extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
        this.inputCommentRef = React.createRef();
    }

    addCommentHandler = () => {
        const commentText = this.inputCommentRef.current.value;
        this.setState((prevState) => {
            const newCommentsArray = [ ...prevState.comments ];
            newCommentsArray.push(commentText);
            this.inputCommentRef.current.value = '';
            return { comments: newCommentsArray };
        });
    }

    renderNewComments = () => {
        const { comments } = this.state;

        return comments.map((comment, index) => {
            return <p key={ index + comment[ index ] }>{ comment }<br /></p>

        })
    }

    render() {

        return (
            <div>
                <h3>Other comments</h3>
                { this.renderNewComments() }
                <br />
                <div>add comment: <input ref={ this.inputCommentRef } type="text" /></div>
                <button onClick={ this.addCommentHandler }>add comment</button>
            </div>
        );
    }
}

export default UserComments;
