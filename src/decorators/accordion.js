//decorator === HOC === Higher Order Component
import React from 'react'

export default OriginalComponent =>
    class DecoratedComponent extends React.Component {
        state = {
            openItemId: null
        }

        toggleOpenItem = itemId => this.setState(prevState => {
            return { openItemId: prevState.openItemId === itemId ? null : itemId };
        })

        render() {
            return (
                <OriginalComponent
                    { ...this.props }
                    { ...this.state }
                    toggleOpenItem={ this.toggleOpenItem }
                />
            )
        }
    }
