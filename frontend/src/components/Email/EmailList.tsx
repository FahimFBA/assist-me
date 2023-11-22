import { FC } from "react";

interface IEmailListProps {
  message: string;
  senderName: string;
}

const EmailList: FC<IEmailListProps> = ({ message, senderName }) => {
  return (
    <div id="unread-promotion-page" className="mail-item mailInbox">
      <div className="animated animatedFadeInUp fadeInUp" id="mailHeadingThree">
        <div className="mb-0">
          <div
            className="mail-item-heading social collapsed"
            data-bs-toggle="collapse"
            role="navigation"
            data-bs-target="#mailCollapseThree"
            aria-expanded="false"
          >
            <div className="mail-item-inner">
              <div className="d-flex">
                <div
                  className="form-check form-check-primary form-check-inline mt-1"
                  data-bs-toggle="collapse"
                  data-bs-target
                >
                  <input
                    className="form-check-input inbox-chkbox"
                    type="checkbox"
                    id="form-check-default3"
                  />
                </div>
                <div className="f-body">
                  <div className="meta-mail-time">
                    <p className="user-email">{senderName}</p>
                  </div>
                  <div className="meta-title-tag">
                    <p className="mail-content-excerpt">
                      <span className="mail-title">{message}</span>
                    </p>
                    <p className="meta-time align-self-center">2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailList;
