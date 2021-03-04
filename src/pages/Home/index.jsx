import React from "react";
import { Icon, Button } from "antd";
import { Status, ChatInput } from "components";
import { Dialogs, Messages } from "containers";

import "./Home.scss";

const Home = () => (
  <section className="home">
    <div className="chat">
      <div className="chat__sidebar">
        <div className="chat__sidebar-header">
          <div>
            <Icon type="team" />
            <span className="brand" >Join</span>
          </div>
          <Button type="link" shape="circle" icon="form" />
        </div>

        <div className="chat__sidebar-dialogs">
          <Dialogs userId={0} />
        </div>
      </div>
      <div className="chat__dialog">
        <div className="chat__dialog-header">
        <div></div>
          <div className="chat__dialog-header-center">
          <div className="dialogs__item-avatar">
              <img src="https://scontent.ftas1-1.fna.fbcdn.net/v/t1.0-1/s200x200/151323779_939904703483162_4260875257250539935_n.jpg?_nc_cat=106&ccb=3&_nc_sid=7206a8&_nc_ohc=z__8b0znKZgAX9xxsnL&_nc_ht=scontent.ftas1-1.fna&tp=7&oh=269e453662c8419e0418fe026f20f5de&oe=6061B111" alt=""/>
           </div>
          <div>
          <b className="chat__dialog-header-username">Ruslan Ablyamitov</b>
            <div className="chat__dialog-header-status">
              <Status online />
            </div>
          </div>
          </div>
         <span>
         <Button type="link" shape="circle" icon="phone" />
          <Button type="link" shape="circle" icon="camera" />
          <Button type="link" shape="circle" icon="ellipsis" />
         </span>
        </div>
        <div className="chat__dialog-messages">
          <Messages />
        </div>
        <div className="chat__dialog-input">
          <ChatInput />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
