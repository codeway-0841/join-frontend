import React from "react";
import orderBy from "lodash/orderBy";
import { Input, Empty } from "antd";

import { DialogItem } from "../";

import "./Dialogs.scss";

const Dialogs = ({
  items,
  userId,
  onSearch,
  inputValue,
  currentDialogId,
  onSelectDialog
}) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Input.Search
        placeholder="Search among contacts"
        onChange={e => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    {items.length ? (
      orderBy(items, ["created_at"], ["desc"]).map(item => (
        <DialogItem
          onSelect={onSelectDialog}
          key={item._id}
          isMe={item.user._id === userId}
          currentDialogId={currentDialogId}
          {...item}
        />
      ))
    ) : (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="Nothing found"
      />
    )}
  </div>
);

export default Dialogs;
