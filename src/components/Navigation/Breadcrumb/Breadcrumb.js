import { MailFilled, PhoneFilled, NodeIndexOutlined } from "@ant-design/icons";

const Breadcrumb = () => {
  return (
    <div id="breadcrumb" className="flex justify-end pt-2 sm:px-10 block">
      <div className="mx-4  flex items-center">
        <MailFilled
          className="px-3"
          style={{ fontSize: "20px", color: "rgb(153, 27, 27)" }}
        />
        <span className="ml-1">tantanvehicles@gmail.com</span>
      </div>
      <div className="mr-4 flex items-center">
        <NodeIndexOutlined
          className="px-3"
          style={{ fontSize: "20px", color: "rgb(153, 27, 27)" }}
        />
        <span>Малая Кольцевая 17, Ташкент</span>
      </div>
      <div className="mr-4 flex items-center">
        <PhoneFilled
          className="px-3"
          style={{ fontSize: "20px", color: "rgb(153, 27, 27)" }}
        />
        <span className="ml-1 border border-red-800 bg-red-800 rounded-full px-5 text-white">
          +998 71 277 7777
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;
