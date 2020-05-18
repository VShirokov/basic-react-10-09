import React, { Component } from 'react';
import Comments from './Comments';

class Article extends Component {

    render() {
        const { article, isOpen } = this.props;
        const { comments } = article;

        return (
            <div>
                <div>
                    <h3 ref={ this.setTitleRef }>{ article.title }</h3>
                    <button onClick={ this.handleBtnClick }>
                        { isOpen ? 'close' : 'open' }
                    </button>
                </div>
                { isOpen &&
                    <section>
                        <p>{ article.text }</p>
                        <br />
                        <Comments usersComments={ comments } />
                    </section> }
            </div>
        );
    }

    // setTitleRef = (titleRef) => console.log(titleRef);

    handleBtnClick = () => this.props.toggleOpen(this.props.article.id);
}

export default Article;
