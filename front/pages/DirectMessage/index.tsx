import React from 'react';
import gravatar from 'gravatar';
import { Container, Header } from './styles';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { useParams } from 'react-router';
import { IUser } from '@typings/db';
import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';

const DirectMessage = () => {
    const { workspace, id } = useParams<{ workspace: string; id: string }>();
    const {data : myData} = useSWR('/api/users',fetcher);
    const {data : userData} = useSWR<IUser | false>(`/api/workspaces/${workspace}/members/${id}`,fetcher);
    
    if(!userData || !myData){
        return null;
    }

    return(
        <Container>
            <Header>
                <img src={gravatar.url(userData.email, { s : '24px', d : 'retro'})} alt={userData.nickname}/>
            </Header>
            <ChatList></ChatList>
            <ChatBox chat = ''></ChatBox>
        </Container>
    )

};

export default DirectMessage;