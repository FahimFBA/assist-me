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
                    <p className="user-email" data-mailTo="laurieFox@mail.com">
                      {senderName}
                    </p>
                  </div>
                  <div className="meta-title-tag">
                    <p
                      className="mail-content-excerpt"
                      data-mailDescription='{"ops":[{"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n"}]}'
                    >
                      <span
                        className="mail-title"
                        data-mailTitle="Promotion Page"
                      >
                        {message}
                      </span>
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
