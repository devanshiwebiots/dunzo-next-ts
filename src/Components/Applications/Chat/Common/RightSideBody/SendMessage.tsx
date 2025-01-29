import { Button, Col, Form, Input } from "reactstrap";
import { FormEvent, useState } from "react";
import ChatDropMenu from "../../PrivateChat/UserChat/ChatDropMenu";
import { replyByUserAsync, sendMessageAsync } from "@/Redux/Reducers/ChatSlice";
import { ImagePath, TypeMessageHere } from "@/Constant/constant";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import EmojiPicker from "emoji-picker-react";

const SendMessage = () => {
  const [messageInput, setMessageInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { chats, selectedUser, currentUser } = useAppSelector((state) => state.chat);

  const dispatch = useAppDispatch();
  const addEmoji = (emoji: string) => {
    const text = `${messageInput}${emoji}`;
    setShowEmojiPicker(false);
    setMessageInput(text);
  };
  const handleMessageChange = (message: string) => {
    setMessageInput(message);
  };

  const handleMessagePress = () => {
    var container = document.getElementsByClassName("msger-chat")[0];
    setTimeout(function () {
      container?.scrollBy({ top: 200, behavior: "smooth" });
    }, 310);
    let currentUserId = currentUser?.id;
    let selectedUserId = selectedUser?.id;
    let selectedUserName = selectedUser?.name;
    if (messageInput.length > 0) {
      dispatch(sendMessageAsync({ currentUserId, selectedUserId, messageInput, chats }));
      setMessageInput("");
      setTimeout(() => {
        const replyMessage = "Hey This is " + selectedUserName + ", Sorry I'm busy right now, I will text you later";
        dispatch(replyByUserAsync({ currentUserId, selectedUserId, replyMessage, chats }));
      }, 2000);
    }
  };

  const submitChat=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    handleMessagePress()
  }

  return (
      <Form className="msger-inputarea pt-0 pb-0" onSubmit={(e)=>submitChat(e)}>
      <ChatDropMenu />
        <Input className="msger-input two uk-textarea shadow-none" type="text" placeholder={TypeMessageHere} value={messageInput} onChange={(e) => handleMessageChange(e.target.value)} />
        <div>{showEmojiPicker ? <EmojiPicker onEmojiClick={({ emoji }) => addEmoji(emoji)} /> : null}</div>
      <div className="open-emoji">
        <div className="second-btn uk-button" onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
      </div>
        <Button color="primary" className="msger-send-btn" onClick={handleMessagePress}><i className="fa fa-location-arrow" /></Button>
      </Form>
  );
};

export default SendMessage;