import React, { useCallback, VFC, useRef, useEffect } from 'react';
import { ChatArea, Form, MentionsTextarea, SendButton, Toolbox } from './styles';
import {Mention} from 'react-mentions';
import autosize from 'autosize';
import { IUser } from '@typings/db';

interface Props {
    chat : string;
    onChangeChat: (e: any) => void;
    onSubmitForm : (e:React.FormEvent<HTMLElement>) => void;
    placeholder?: string;
    data?: IUser[];
}

const ChatBox : VFC<Props> = ({chat, onChangeChat, onSubmitForm,placeholder,data}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
  }, []);
  const onKeyDownChat = useCallback((e)=>{
    if(e.key === "Enter"){
      if(!e.shiftKey){
        console.log("dd");
        e.preventDefault();
        onSubmitForm(e);        
      }
    }
  },[onSubmitForm])
  
  return (
    <ChatArea>
      <Form onSubmit={onSubmitForm}>
        <MentionsTextarea id="editor-chat" value={chat} onChange={onChangeChat} 
        onKeyDown={onKeyDownChat} placeholder={placeholder} inputRef={textareaRef}>
           <Mention
            appendSpaceOnAdd
            trigger="@"
            data={data?.map((v) => ({ id: v.id, display: v.nickname })) || []}
            // renderSuggestion={renderUserSuggestion}
          />
        </MentionsTextarea>
        <Toolbox>
          <SendButton
            className={
              'c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send' +
              (chat?.trim() ? '' : ' c-texty_input__button--disabled')
            }
            data-qa="texty_send_button"
            aria-label="Send message"
            data-sk="tooltip_parent"
            type="submit"
            disabled={!chat?.trim()}
          >
            <i className="c-icon c-icon--paperplane-filled" aria-hidden="true" />
          </SendButton>
        </Toolbox>
      </Form>
    </ChatArea>
  );
};

export default ChatBox;
