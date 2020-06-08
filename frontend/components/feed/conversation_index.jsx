import React from 'react';
import ConversationIndexItem from './conversation_index_item';
;


class ConversationIndex extends React.Component {
  componentDidMount() {
    this.props.fetchConversations();
    this.props.fetchUsers();
  }

  render() {
    const { conversations, users} = this.props;

    return (
      <div>
        <ul>
          {
            conversations.map(conversation => (
             <ConversationIndexItem conversation={conversation}
              key={conversation.id}
              users={users}
            />
            ))
          }
        </ul>
        
      </div>
    );
  }
}

export default ConversationIndex;