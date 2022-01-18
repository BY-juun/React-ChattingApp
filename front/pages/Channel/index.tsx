import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import useInput from '@hooks/useInput';
import React, { useCallback, VFC } from 'react';
import { Container, Header } from './styles';

const Channel : VFC = () => {
    const [chat, onChangeChat, setChat] = useInput("");
    const onSubmitForm = useCallback((e)=>{
        e.preventDefault();
        setChat("");
        console.log("Channel DM Send");
    },[chat])
  return(
      <Container>
          <Header>
              채널!
          </Header>
          <ChatList></ChatList>
          <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm}/>
      </Container>
  )
};

export default Channel;
