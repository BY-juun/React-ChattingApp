import { Button, Input, Label } from '@pages/SignUp/styles';
import React, { FC } from 'react';

interface Props{
    onCreateWorkspace : (e:any) => void;
    onChangeNewWorkspace : (e:any) => void;
    onChangeNewUrl : (e:any) => void;
    newWorkspace : string;
    newUrl : string;
}

const Modalform : FC<Props> = ({onCreateWorkspace, onChangeNewWorkspace, onChangeNewUrl ,newWorkspace, newUrl}) => {
    return (
        <form onSubmit={onCreateWorkspace}>
          <Label id="workspace-label">
            <span>워크스페이스 이름</span>
            <Input id="workspace" value={newWorkspace} onChange={onChangeNewWorkspace}></Input>
          </Label>
          <Label id="workspace-url-label">
            <span>워크스페이스 url</span>
            <Input id="workspace" value={newUrl} onChange={onChangeNewUrl}></Input>
          </Label>
          <Button type="submit">생성하기</Button>
        </form>
    )
};

export default Modalform;