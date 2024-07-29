import { PrettyChatWindow } from "react-chat-engine-pretty";
import "../App.css";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={"5f6c21f4-07be-4682-8e7f-ebf8fea37eac"}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default ChatsPage;
